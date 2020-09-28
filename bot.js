require('dotenv').config();
const {Client} = require('discord.js');
const axios = require('axios');
const client = new Client();

client.once('ready', () =>{
    console.log('Ready!')
});

client.on(`message`, (message) => {
    if (message.content.includes('oeis-')){
        let userReq = message.content;
        let sequence = userReq.replace('oeis-','')
        let fullURL = 'https://oeis.org/search?fmt=json&q=%3C'+sequence+'%3E&start=%3CitemToStartAt%3E'
        let displayLink = 'http://oeis.org/search?q=' + encodeURI(sequence) + '&sort=&language=&go=Search'

        axios(fullURL)
            .then(function (html){
                const desiredObj = html.data.results[0];
                const indexNo = 'A'+desiredObj.number;
                const description = desiredObj.name;
                message.reply(`\n**OEIS Index: ** ${indexNo} \n**Description : ** ${description} \n**Find more at: ** ${displayLink}`)
            })
            .catch(function (err){
                console.log('error found')
            })

        console.log('Message sent by: ' + message.author.username);
        console.log('Sequence requested: ' + sequence);
        console.log('URL: ' + fullURL)
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
