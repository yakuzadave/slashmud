const { app } = require("../app.js");

app.message("-test", async ({ message, say, client, ack }) => {
  await ack();
  console.log(message)
  say("respondse test")
});
