module.exports = {
name: "enlarge",
aliases: ["emoji"],
code: `$djsEval[const emoji = require('discord.js').Util.parseEmoji("$message[1]") 

let emojis = 'https://cdn.discordapp.com/emojis/' + emoji.id + "." + (emoji.animated ? 'gif' : 'png')

message.channel.send(emojis)]`
}