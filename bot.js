require('dotenv').config();

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

let modded = false;

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', () => {
    console.log('Our bot is ready to go!')
})

client.on('messageDelete', msg => {
    msg.channel.send(`Stop Deleting Messages Of ${msg.member}!`)
})

client.on('message', msg => {
    if (msg.content === "is anyone online?" || msg.content === "Is anyone online here?") {
        msg.react("✌")
        msg.channel.send(`Oh! Yes I am ${msg.member}`)
    }
    else if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        // msg.channel.send("Not tagged!")
        // msg.reply("Pong!")
        modUser(msg.member)        
    }
    else if (msg.content.toLowerCase() === "wtf" || msg.content.toLowerCase() === "tf" || msg.content.toLowerCase() === "fuck") {
        msg.channel.send("Stop using bad words or else you will be thrown out of this server!")
        msg.react("😡👿")
    }

    else if (msg.content.toLowerCase() === "good morning" || msg.content.toLowerCase() === "good evening" || msg.content.toLowerCase() === "good afternoon" || msg.content.toLowerCase() === "good night") {
        msg.react("😉")
        msg.channel.send("Same to you!")
    }
})

function modUser(member) {
    if (modded === false) {
        member.roles.add("791966548817739856")
        modded = true
    } else {
        member.roles.remove("791966548817739856")
        modded = false
    }
}

client.login(process.env.BOT_TOKEN)