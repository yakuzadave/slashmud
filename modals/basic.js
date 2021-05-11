module.exports = {
  welcome_app_home: {
    text:
      "Hi there! :zap:SlashMUD:zap: is the port of my bot that I started making for Discord to help facilitate PbP games and also bring a MUD-like experience to the games we play in our chat-clients.  A lot of this is a work-in-progress so bear with us as we continue development.",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "Hi there! :zap:SlashMUD:zap: is the port of my bot that I started making for Discord to help facilitate PbP games and also bring a MUD-like experience to the games we play in our chat-clients.  A lot of this is a work-in-progress so bear with us as we continue development. \n\n"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Pick a channel from the dropdown list*"
        },
        accessory: {
          action_id: "configure_channel",
          type: "channels_select",
          placeholder: {
            type: "plain_text",
            text: "Select channel",
            emoji: true
          }
        }
      }
    ]
  },
  welcome_channel: {
    text:
      "Hi there! Bolt is a simple App that forwards messages to another channel by reacting to a message with the :zap: emoji.",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "Hi there! :zap:SlashMUD:zap: is the port of my bot that I started making for Discord to help facilitate PbP games and also bring a MUD-like experience to the games we play in our chat-clients.  A lot of this is a work-in-progress so bear with us as we continue development."
        }
      }
    ]
  },
  added_to_channel: {
    text: "SlashMUD has been invited to channel",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            ":zap: SlashMUD has been invited to *<#{{channelId}}|{{channelName}}>*"
        }
      }
    ]
  },
  channel_configured: {
    text: "The default channel for SlashMUD has been configured",
    replace_original: true,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            ":tada: The default channel for SlashMUD has been configured for *<#{{channelId}}|{{channelName}}>*"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "You can now invite SlashMUD to a channel by typing `/invite` in any of your channels or simply select one channel from the dropdown below."
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Invite Bolt to a channel*"
        },
        accessory: {
          action_id: "add_to_channel",
          type: "channels_select",
          placeholder: {
            type: "plain_text",
            text: "Select channel",
            emoji: true
          }
        }
      }
    ]
  }
};
