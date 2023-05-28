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

const restricted_interaction_guilds = [984162831656181920]
const can_interact = {
    "984162831656181920": ["984162833833013261"]
}

client.on("messageCreate", (message) => {
    let willRespond = (restricted_interaction_guilds.includes(message.guild) && can_interact[message.guild.toString()].includes(message.channel)) || !(restricted_interaction_guilds.includes(message.guild))
    if (message.content == "Hi!" && willRespond) {
        message.reply("Hey! How are you?")
    }
})

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(process.env.WELCOME).send(`Hello, <@${member.id}>, welcome to poggers place. We hope you enjoy your stay!`);
})

client.login(process.env.TOKEN)