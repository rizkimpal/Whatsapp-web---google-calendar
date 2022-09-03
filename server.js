const { Client, LocalAuth } = require("whatsapp-web.js");
const validator = require("validator");
const delay = require('delay')
const qrcode = require('qrcode-terminal')
const { unFormatter } = require("./utils/unFormatter");
const { updateCalendar } = require("./gCalendar/updateCalendar");
const reply = require("./databases/reply");
const contact = require("./databases/Contact");

//Global Variable
var emailJSON;
var emailArr = [];
console.log("Data yang akan dikirim => ", contact);
const numb = Object.values(contact);
const person = Object.keys(contact);

//create Schedule
//createCalendar();

// WHATSAPP API
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
  },
});
client.initialize();
client.on("authenticated", () => {
  console.log("Whatsapp WEB => Authenticated");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, function (qrcode) {
    console.log(qrcode);
});
  console.log("QR RECIEVED", qr);
});

//when ready Start to send Message, number get from databases/contact
client.on("ready", () => {
  for (let i = 0; i < numb.length; i++) {
    client.sendMessage(
    numb[i], reply.start);
   console.log(`message send to ${person[i]}`)
   }
  console.log("WHATSAPP READY  => HELLO KIMPAL ")
});

client.on("message", async (msg) => {
  if (msg.body == "melu pal") {
    await delay(3000)
    msg.reply(reply.ikut);
  } else if (msg.body == "skip pal") {
    await delay(3000)
    msg.reply(reply.skip);
  } else if (msg.body.startsWith("emailku ")) {
    let email1 = msg.body.split(" ")[1];
    if (validator.isEmail(email1) === true) {
      emailJSON = { email: email1 };
      emailArr.push(emailJSON);
      console.log(emailArr);
      await delay(5000);
        // simulates typing in the chat
      msg.reply(
        `Thankyou, let me create schedule in google calendar in email ${email1}`
      );
      updateCalendar(emailArr);
      await delay(30000);
      //get contact number
      const contact = await msg.getContact();
      console.log("Data contact => ", contact);
      const no = contact.id._serialized;
      console.log("number to reply => ", unFormatter(no));
      client.sendMessage(
        no,
        `schedule created,please check your google calendar in ${email1} account and goodbye`
      );
    }
    else{
      msg.reply(`Wrong format, please send "emailku youremail" for example: \n\n emailku kimpalpalkim@gmail.com`)
    }
  }
});
