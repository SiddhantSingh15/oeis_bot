require('dotenv').config();

const {Client} = require('discord.js');
const client = new Client();

client.on(`message`, (message) => {
    if (message.content === '!oeis'){
        message.reply('Please type your sequence: ')
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
