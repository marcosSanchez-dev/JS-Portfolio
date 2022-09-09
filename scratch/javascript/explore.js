const Twilio = require("twilio");

const client = new Twilio(
  "AC2929160136d48b2e1b2983a09bbd973",
  "0647879d7928c11ace58636639dca3ed"
);

client.messages
  .list()
  .then((messages) =>
    console.log(`El mensaje mas reciente: ${messages[0].body}`)
  ).catch(err => console.log(err));

  console.log('Reuniendo el message log');