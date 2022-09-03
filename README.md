# Whatsapp-web---google-calendar

before using this code, you must install : 

-node js see on : https://nodejs.org/en/

after installing node js, you can clone this code wit `git clone https://github.com/rizkimpal/Whatsapp-web---google-calendar.git`

after clone it, go to folder and run in terminal 

-npm install
-set client id & client secret google console and token secret Oauth2playground
reference: https://www.youtube.com/watch?v=zrLf4KMs71E&t=1304s
-setting reply on server.js
npm start

Info: 

1. gCalendar : 

gCalendar folder is folder to config to googleCalendar API using Oauth2playground
reference: https://www.youtube.com/watch?v=zrLf4KMs71E&t=1304s

2. dabases : 
databases folder is folder to save data. for example contact number data, reply chatbot data, event data calendar, etc. 

3. utils : 
utils folder is folder to change format number `08xxxxxxxxxx` to `62xxxxxxxxxxx@c.us`. because whatsapp-web library using format '62xxxx@c.us' number to send message. 

4. server.js: 
this code to start all progam and the main core of whatsapp-web progam
reference: https://docs.wwebjs.dev/ 
https://www.youtube.com/watch?v=IRRiN2ZQDc8&list=PLIw7PfYokmfkn2GwHQcfNxZ-s3yk4HopN
