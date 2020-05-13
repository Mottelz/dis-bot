// https://discordapp.com/oauth2/authorize?client_id=709925549568426014&scope=bot&permissions=464896
require('dotenv').config()
const discord = require('discord.js');
const client = new discord.Client();
const utils = require('./utils.js');


// On ready
client.on('ready', () => {
    console.log(`Ready to rumble.`);
});


// On message
client.on('message', msg => {
    // Confirm human author
    if(!msg.author.bot) {
        utils.flip(msg.content, 
            res => msg.channel.send(res)
        )
    }
});


// Login to Discord
client.login(process.env.TOKEN);