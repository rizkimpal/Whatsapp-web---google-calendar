const { calendar } = require("./config/gConfig");

const listCalendar = function() {
  try {
    let response = calendar.events.list({
      auth: oAuth2Client,
      calendarId: "primary",
      timeMin: `2022-8-01T00:00:00.000Z`,
      timeMax: `2022-8-31T00:00:00.000Z`,
    });
    return response.data
  } catch (error) {
    console.log(error)
  }
};
module.exports = { listCalendar }
