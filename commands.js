const { db } = require("./db/db.js");
const d20 = require("d20");

const roll = async ({ command, ack, say, respond, client }) => {
  await ack();
  await console.log(command);
  let r = await d20.roll(`${command.text}`);

  //let formatted = await r.join('\n')
  await console.log(r);
  await say(`You rolled:\n\n${r}`);
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
          text: "Character"
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Add your character"
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click me!"
              },
              action_id: "button_abc"
            }
          },
          {
            type: "input",
            block_id: "char_desc",
            label: {
              type: "plain_text",
              text: "Tell us a little bit about your character."
            },
            element: {
              type: "plain_text_input",
              action_id: "char_desc",
              multiline: true
            }
          }
        ],
        submit: {
          type: "plain_text",
          text: "Submit"
        }
      }
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
  rrr: rrr,
  dmroll: dmroll,
  character: character
};
