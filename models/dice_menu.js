let menu_list = {};

let dice_menu_1 = {
  type: "modal",
  submit: {
    type: "plain_text",
    text: "Submit",
    emoji: true,
  },
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true,
  },
  title: {
    type: "plain_text",
    text: "Dice Menu",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Select you dice roll options below:",
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":game_die: Select the number of dice to roll:",
      },
      accessory: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Choose list",
          emoji: false,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "My events",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "All events",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "Event invites",
              emoji: true,
            },
            value: "value-1",
          },
        ],
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":gear: *Settings*\nManage your notifications and team settings",
      },
      accessory: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Edit settings",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Notifications",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "Team settings",
              emoji: true,
            },
            value: "value-1",
          },
        ],
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Send feedback",
            emoji: true,
          },
          value: "click_me_123",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "FAQs",
            emoji: true,
          },
          value: "click_me_123",
        },
      ],
    },
  ],
};
