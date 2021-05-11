const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./db/db.json");
const db = low(adapter);

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





module.exports = {
    db : db
}
