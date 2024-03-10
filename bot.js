// bot.js
const Discord = require('discord.js');

// Define the necessary intents
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});

const token = 'MTIxNjQxMjMwNjY3NDU1Mjk2Mg.GETkkm.qxO97IpM24bZe9bp_Z1uNeCxGpCpFuMVCerptE'; // Replace with your Discord bot token

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);