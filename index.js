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
    if (message.content == "Hi!") {
        message.reply("Hey! How are you?")
    }
})

client.login(process.env.TOKEN)