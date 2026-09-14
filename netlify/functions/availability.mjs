import { google } from "googleapis";
import { DateTime } from "luxon";

const TIME_ZONE = process.env.BOOKING_TIME_ZONE || "Asia/Jerusalem";
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const WORK_START = process.env.WORK_START || "09:00";
const WORK_END = process.env.WORK_END || "19:00";
const SLOT_STEP_MINUTES = Number(process.env.SLOT_STEP_MINUTES || 30);

const SERVICE_DURATIONS = {
  "תספורת": 30,
  "תספורת + זקן": 45,
};

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function getAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!clientEmail || !privateKey || !CALENDAR_ID) {
    throw new Error("Missing Google Calendar environment variables");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
}

function overlaps(start, end, busyStart, busyEnd) {
  return start < busyEnd && end > busyStart;
}

export default async (req) => {
  if (req.method !== "GET") return json(405, { error: "Method not allowed" });

  try {
    const url = new URL(req.url);
    const date = url.searchParams.get("date");
    const service = url.searchParams.get("service") || "תספורת";
    const duration = SERVICE_DURATIONS[service] || 30;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date || "")) {
      return json(400, { error: "Invalid date" });
    }

    const day = DateTime.fromISO(date, { zone: TIME_ZONE });
    if (!day.isValid) return json(400, { error: "Invalid date" });

    const [startHour, startMinute] = WORK_START.split(":").map(Number);
    const [endHour, endMinute] = WORK_END.split(":").map(Number);

    const dayStart = day.set({ hour: startHour, minute: startMinute, second: 0, millisecond: 0 });
    const dayEnd = day.set({ hour: endHour, minute: endMinute, second: 0, millisecond: 0 });

    const now = DateTime.now().setZone(TIME_ZONE);

    const calendar = google.calendar({ version: "v3", auth: getAuth() });
    const fb = await calendar.freebusy.query({
      requestBody: {
        timeMin: dayStart.toUTC().toISO(),
        timeMax: dayEnd.toUTC().toISO(),
        timeZone: TIME_ZONE,
        items: [{ id: CALENDAR_ID }],
      },
    });

    const busyRaw = fb.data.calendars?.[CALENDAR_ID]?.busy || [];
    const busy = busyRaw.map(b => ({
      start: DateTime.fromISO(b.start).toMillis(),
      end: DateTime.fromISO(b.end).toMillis(),
    }));

    const slots = [];
    for (let cursor = dayStart; cursor.plus({ minutes: duration }) <= dayEnd; cursor = cursor.plus({ minutes: SLOT_STEP_MINUTES })) {
      const slotEnd = cursor.plus({ minutes: duration });

      if (cursor <= now) continue;

      const s = cursor.toMillis();
      const e = slotEnd.toMillis();
      const blocked = busy.some(b => overlaps(s, e, b.start, b.end));

      if (!blocked) slots.push(cursor.toFormat("HH:mm"));
    }

    return json(200, { date, service, slots });
  } catch (err) {
    console.error("availability error", err);
    return json(500, { error: "Could not load availability" });
  }
};
