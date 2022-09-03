//change start & end date
const eventStartTime = `2022-08-28T18:00:00+07:00`;
const eventEndTime = `2022-08-28T23:00:00+07:00`;

const event = {
  summary: `Judul Acara`,
  location: `https://www.google.com/maps/place/Estuary+Caf%C3%A9/@-7.7634358,110.3698101,15z/data=!4m5!3m4!1s0x0:0xc92fb44d034ddd57!8m2!3d-7.7634358!4d110.3698101`,
  description: `deskripsi acara`,
  start: {
    dateTime: eventStartTime,
    timeZone: `+07:00`,
  },
  end: {
    dateTime: eventEndTime,
    timeZone: `+07:00`,
  },
  ColorId: 3,
  attendees: [
     ],
  reminders: {
    useDefault: false,
    overrides: [
      { method: `email`, minutes: 24 * 60 },
      { method: `popup`, minutes: 5 * 60 },
    ],
  },
};

module.exports = event