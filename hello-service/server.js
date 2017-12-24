// source: https://nodejs.org/uk/docs/guides/nodejs-docker-webapp/

'use strict';

const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

function getAppDetails() {
  return 'HOSTANME: '+process.env.HOSTNAME;
/* 
  let appDetails = JSON.stringify(process.argv);
  appDetails += '\n';
  appDetails += JSON.stringify(process.env,null,2);
  return appDetails; */
};

const app = express();
app.get('/', (request, result) => {
  result.send(`Hello world! Best regards, ${process.env.GREETINGS}.\n${getAppDetails()}`);
});

app.listen(PORT, HOST);
console.log(`Running ${process.env.GREETINGS} on http://${HOST}:${PORT}.\n${getAppDetails()}`);
