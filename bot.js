require('dotenv').config();
const fetch = require('node-fetch');

const {Client} = require('discord.js');
const client = new Client();

client.once('ready', () =>{
    console.log('Ready!')
});

client.on(`message`, (message) => {
    if (message.content.includes('oeis-')){
        let userReq = message.content;
        let sequence = userReq.replace('oeis-','');
        let fullURL = 'http://oeis.org/search?q=' + encodeURIComponent(sequence) + '&sort=&language=english&go=Search';
        fetch(fullURL).then(res => res.text());
        console.log('Message sent by: ' + message.author.username);
        console.log('Sequence requested: ' + sequence);
        console.log('URL: ' + fullURL)
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
