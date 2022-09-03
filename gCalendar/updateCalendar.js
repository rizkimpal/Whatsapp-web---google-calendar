const { calendar } = require("./config/gConfig");

const updateCalendar = async (email) => {
  calendar.events.patch(
    {
      calendarId: `primary`,
      eventId: `yourEventID`,
      resource:{ attendees: email},
    },
    (err) => {
      if (err) return console.error(`calender event creation error`, err);

      return console.log(`calendar Event updated`);
    }
  );
};
module.exports = { updateCalendar }
