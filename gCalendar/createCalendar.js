const { calendar } = require("./config/gConfig");
const event = require("../databases/event");

const createCalendar = function() {
  calendar.events.insert(
    {
      calendarId: "primary",
      resource: event,
    },
    function (err, event) {
      if (err) {
        console.log(
          "There was an error contacting the Calendar service: " + err
        );
        return;
      }
      eventId = event.data.id;
      console.log("Event created: %s", eventId);
    }
  );
};
createCalendar();
module.exports = { createCalendar };
