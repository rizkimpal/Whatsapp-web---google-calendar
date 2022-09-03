const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const dotenv = require("dotenv");
dotenv.config();


//using your google console & OAuth2playground token secret
const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);
oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_TOKEN_SECRET,
});

const calendar = google.calendar({ version: `v3`, auth: oAuth2Client });

module.exports = { calendar };
