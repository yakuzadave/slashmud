const { db } = require("./db/db.js");
const d20 = require("d20");

const create_record = async ({ command, ack, say, respond, client }) => {
  await ack();

  const airtable = await require("airtable");
  await airtable.configure({
    apiKey: process.env.AT_KEY,
  });

  let args = command.text.split(" ");

  console.log("Args: ", args);

  let bases = {
    necro: "appSeSJgWdMCFGhEg",
  };

  let base_target = bases[`${args[1]}`];
  let table_target = args[2];
  let record_name = args[3];
  let desc = args[4];

  console.log(`Targeting ${base_target}`);

  let base = airtable.base(base_target);

  let res = null;

  if (args[1] == "necro" && table_target.toLowerCase() == "armor") {
    let req = await base(`${table_target}`)
      .create([
        {
          fields: {
            Name: `${record_name}`,
            Description: `${desc}`,
          },
        },
      ])
      .then((record) => {
        console.log(record);
        console.log(`Record ${record.id} has been created`);

        return record;
      })
      .then((record) => db.get("armor").push(record).write())
      .then(() => console.log("Record has been added to db"))
      .then(() => say("Record has been created successfully"))
      .catch((err) => console.log(err));
  }
};

const roll = async ({ command, ack, say, respond, client }) => {
  await ack();
  await console.log(command);
  let r = await d20.roll(`${command.text}`);

  //let formatted = await r.join('\n')
  await console.log(r);
  await say(`You rolled:\n\n${r}`);
};

const wroll = async ({ command, ack, say, respond, client }) => {
  await ack();

  console.log(command);

  let args = command.text.split(" ");

  let diceNum = parseInt(args[0]);
  let diceTarget = parseInt(args[2]);

  let results = [];
  let match_results = [];

  results.push(
    `:game_die: Rolling \`${diceNum}\` dice, hitting on \`${diceTarget}\` and up.\n`
  );

  while (diceNum > 0) {
    let r = await d20.roll(`${args[1]}`);
    results.push(`• You rolled a \`${r}\``);

    if (parseInt(r) >= diceTarget) {
      match_results.push(r);
    }

    diceNum--;
  }

  results.push(`\n*Total Rolls:* \`${results.length - 1}\``);
  results.push(`*Total Hits:* \`${match_results.length}\``);

  let formatted = await results.join("\n");
  await console.log(formatted);

  await say({
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "GrimDank Dice Roller",
          emoji: true,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${formatted}`,
        },
      },
    ],
  });
};

const dmroll = async ({ command, ack, say, respond, client }) => {
  await ack();
  await console.log(command);
  let r = await d20.roll(`${command.text}`);

  //let formatted = await r.join('\n')
  await console.log(r);
  await respond(`You rolled:\n\n${r}`);
};

const rrr = async ({ command, ack, say, respond, client }) => {
  await ack();
  await console.log(command);
  let args = command.text.split(" ");
  console.log(args);
  let results = [];
  let i = parseInt(args[0]);
  while (i > 0) {
    let r = await d20.roll(`${args[1]}`);
    results.push(r);
    i--;
  }

  let res_sum = results.reduce((a, b) => a + b, 0);
  results.push(`Total: ${res_sum}`);
  let formatted = await results.join("\n");
  await console.log(formatted);

  await say(`You rolled:\n\n${formatted}`);
};

let character = async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack();

  try {
    // Call views.open with the built-in client
    const result = await client.views.open({
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: body.trigger_id,
      // View payload
      view: {
        type: "modal",
        // View identifier
        callback_id: "view_1",
        title: {
          type: "plain_text",
          text: "Character",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Add your character",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click me!",
              },
              action_id: "button_abc",
            },
          },
          {
            type: "input",
            block_id: "char_desc",
            label: {
              type: "plain_text",
              text: "Tell us a little bit about your character.",
            },
            element: {
              type: "plain_text_input",
              action_id: "dreamy_input",
              multiline: true,
            },
          },
        ],
        submit: {
          type: "plain_text",
          text: "Submit",
        },
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

//load commands

//export the commands module

module.exports = {
  roll: roll,
  wroll: wroll,
  rrr: rrr,
  dmroll: dmroll,
  character: character,
};
