const axios = require("axios");
const token = process.env.token;
const fs = require("fs");

let get_channel_list = async (token) => {
  let config = {
    method: "get",
    url: "https://slack.com/api/conversations.list?exclude_archived=false&types=public_channel&limit=1000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let channel_list = [];

  axios(config)
    .then((response) => {
      let res_data = response.data;

      let channels = res_data["channels"];
      console.log(channels);

      return channels;
    })
    .then((channels) =>
      channels.forEach((channel) => channel_list.push(channel))
    )
    .then(() =>
      fs.writeFileSync(
        "channel_list.json",
        JSON.stringify({ channels: channel_list })
      )
    )
    .catch((error) => {
      console.log(error);
    });
};

get_channel_list(token);
