import { google } from "googleapis";
import { DateTime } from "luxon";

const TIME_ZONE = process.env.BOOKING_TIME_ZONE || "Asia/Jerusalem";
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

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

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  try {
    const body = await req.json();
    const { name, phone, service, date, time } = body || {};
    const duration = SERVICE_DURATIONS[service];

    if (!name || !phone || !duration || !/^\d{4}-\d{2}-\d{2}$/.test(date || "") || !/^\d{2}:\d{2}$/.test(time || "")) {
      return json(400, { error: "Missing or invalid booking details" });
    }

    const start = DateTime.fromISO(`${date}T${time}`, { zone: TIME_ZONE });
    const end = start.plus({ minutes: duration });

    if (!start.isValid || start <= DateTime.now().setZone(TIME_ZONE)) {
      return json(400, { error: "Invalid booking time" });
    }

    const calendar = google.calendar({ version: "v3", auth: getAuth() });

    // Check availability again at the moment of booking.
    const fb = await calendar.freebusy.query({
      requestBody: {
        timeMin: start.toUTC().toISO(),
        timeMax: end.toUTC().toISO(),
        timeZone: TIME_ZONE,
        items: [{ id: CALENDAR_ID }],
      },
    });

    const busy = fb.data.calendars?.[CALENDAR_ID]?.busy || [];
    if (busy.length) {
      return json(409, { error: "Slot is no longer available" });
    }

    const event = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: {
        summary: `${name} — ${service}`,
        description: `טלפון: ${phone}\nשירות: ${service}\nנוצר דרך אתר Tal Bitton`,
        start: {
          dateTime: start.toISO(),
          timeZone: TIME_ZONE,
        },
        end: {
          dateTime: end.toISO(),
          timeZone: TIME_ZONE,
        },
      },
    });

    return json(200, {
      ok: true,
      eventId: event.data.id,
      start: start.toISO(),
      end: end.toISO(),
    });
  } catch (err) {
    console.error("book error", err);
    return json(500, { error: "Could not create booking" });
  }
};
