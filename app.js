const express = require("express");
const low = require("lowdb");
const Filesync = require("lowdb/adapters/FileSync");
const adapter = new Filesync("db.json");
const db = low(adapter);
const bodyParser = require("body-parser");
const inHandler = require("./handlers/in");
const outHandler = require("./handlers/out");
const rollHandler = require("./handlers/slash/roll");
const records = require("./handlers/slash/record");
const { App } = require("@slack/bolt");



db.defaults({
  commands: [],
  events: [],
  skills: {},
  players: [],
  mobs: [],
  objects: {},
  weapons: {},
  armor: {},
  ships: {},
  resources: {},
  time: 0,
  locations: {},
  count: 0
}).write();

var app = express();
var port = process.env.PORT || 3000;
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
// handler mapping
app.post("/inhook", inHandler);
app.post("/outhook", outHandler);
app.post("/slash/roll", rollHandler);
app.get('/', function(req,res){
  
  console.log(req.body)
  if(req.query.challenge == 'undefined'){
    res.send(req.query)
  }
  else{
    res.send('Success')
  }
  
})

const bot = new App({
  token: process.env.token,
  signingSecret: process.env.signing,
  db: db,
  app: app
});

async () => {
  await bot.start(4000);
  console.log("⚡️ Bolt app is running!");
};


// error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
app.listen(port, function() {
  console.log("Slack bot listening on port " + port);
});

//console.log(bot)

module.exports.bot = bot