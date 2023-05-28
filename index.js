const Discord = require("discord.js")
require("dotenv").config()
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers
    ]
})

client.on("ready", () => {
    console.log(`Successfully logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi!" && message.channel == process.env.INTERACT) {
        message.reply("Hey! How are you?")
    }
})

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(process.env.WELCOME).send(`Hello, <@${member.id}>, welcome to poggers place. We hope you enjoy your stay!`);
})

client.login(process.env.TOKEN)