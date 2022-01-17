// Slack API INIT


(async () =>{
  
  const { WebClient } = require('@slack/web-api');
  const token = process.env.token;
  const bot_token = process.env.bot_token;
  const client = new WebClient(token);
  console.log(client)
  
  let channel_list = await client.conversations.list()
  
  console.log(await channel_list)


 
 })()

