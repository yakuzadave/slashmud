const { App } = require("@slack/bolt");


// import commands from commands.js
const { character, rrr, roll, dmroll} = require("./commands.js")
const d20 = require("d20");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.token,
  signingSecret: process.env.signing,
  logLevel: "DEBUG"
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();

// Add in error events
app.event("PlatformError", async ({ event, client }) => {
  console.log(event);
});

app.event("RequestError", async ({ event, client }) => {
  console.log(event);
});

app.event("HTTPError", async ({ event, client }) => {
  console.log(event);
});

app.event("UnknownError", async ({ event, client }) => {
  console.log(event);
});

app.message("-test", async ({ message, say, client }) => {
  console.log(message);
  //say('Test success')
});

app.command("/roll", roll);

app.command("/dmroll", dmroll)

app.command("/rrr", rrr);

app.command('/character', character)