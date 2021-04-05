const dbd = require("dbd.js")

const bot = new dbd.Bot({ // define the new client
  token: "Nzg2ODk3OTQ5OTIxNzcxNTQx.X9NF0w.gWyJ4O15vDRVeQ69bgY0h48d1fE",
  prefix: "="

})
//set the bot status
bot.status({
  text: "Kotoamatsukami",
  type: "STREAMING",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
})
bot.variables({
  prefix: "=",
  myName: " Virus",
  apples: 0,
  snipe_msg: "",
  snipe_author: "",
  snipe_channel: "",
  snipe_date: "",
  ticketchannel: "",
  msgEditorID: "undefined",
  esnipeOldMsg: "undefined",
  warn: "0",
  reason: "0",
  suggestchannel: "",
  suggest_system: "no",
  XP: "0",
  Bank: "0",
  Wallet: "0",
  psuffix: '0',
  tv: "0",
  duffle: '0',
  bag: "0",
  smartphone: "0",
  laptop: "0",
  car: "0",
  truck: "0",
  helicopter: "0",
  apartment: "0",
  house: "0",
  mansion: "0",
  DailyChest: "0",
  lucky: "0",
  spiteful: "0",
  suggestchannel: "",
suggest_system: "no",
 joinmessage: "",
  joinchannel: "",
  leavemessage: "",
  leavechannel: "",
  chatbot: "not set",
  ccmd: "",
  cdes: "",
  ticketTitle: "",
user: "",
ticketchannel: "",
messageID: "",
ticketlimit: "",
categorything: "",
ticketC: "",
closed: "",
rsystem: "",
rexp:"",
exp: "",
giveaway: "",
})

bot.onMessage()

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
  const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`)
    bot.command({
      name: command.name,
      aliases: command.aliases, // Here we make the bot read aliases correctly.
      code: command.code
    })
  }
}
bot.deletedCommand({
  channel: "$channelID",
  code: `$setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_date;$day $month $year - $hour:$minute]`,
});
bot.onMessageDelete();


bot.updateCommand({
  channel: "$channelID",
  code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$oldMessage]`
})
bot.onMessageUpdate();
bot.awaitedCommand({
  name: "tsp2",
  code: `
**✅ Setup ticket is complete**
 $setServerVar[ticketchannel;$message]
 $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
 $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
})
bot.awaitedCommand({
name: "lock",
code: `$modifychannelperms[$channelid;-sendmessages;$findnumbers[$message[1]]]`
}) 
bot.awaitedCommand({
name: "unlock",
code: `$modifychannelperms[$channelid;+sendmessages;$findnumbers[$message[1]]]`
}) 
const username = `$username[$authorID]`
const discrim = `$discriminator[$authorID]`
const members = `$membersCount`
const guild = `$serverName`
const avatar = `$replaceText[$userAvatar[$authorID];webp;png]`
const background = `https://i.redd.it/1w02rshhr4761.png`
	
bot.joinCommand({
channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[joinchannel]==];true;$randomChannelID];false;$getServerVar[joinchannel]]",
code: `$djseval[(async() =>{const Discord = require('discord.js')
const canvas = require('discord-canvas'),
  welcomeCanvas = new canvas.Welcome();
let image = await welcomeCanvas
  .setUsername("${username}")
  .setDiscriminator("${discrim}")
  .setMemberCount("${members}")
  .setGuildName("${guild}")
  .setAvatar("${avatar}")
  .setColor("border", "#ff0000")
  .setColor("username-box", "#660000")
  .setColor("discriminator-box", "#ff0000")
  .setColor("message-box", "#ff6666")
  .setColor("title", "#ff0000")
  .setColor("avatar", "#660000")
  .setBackground("${background}")
  .toAttachment();
let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome.png");
message.channel.send(attachment);
})()]
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinmessage];(user.mention);<@$authorID>];(guild.name);$serverName];(user.username);$username[$authorID]];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
$onlyIf[$getServerVar[joinmessage]!=;]$onlyIf[$getServerVar[joinchannel]!=;]
$onlyIf[$getServerVar[joinchannel]==$channelID;]
$suppressErrors[**⛔ Error**{delete:1s}]`
})

bot.onJoined()
	
bot.leaveCommand({
channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[leavechannel]==];true;$randomChannelID];false;$getServerVar[leavechannel]]",
code: `$djseval[(async() =>{const Discord = require('discord.js')
const canvas = require('discord-canvas'),
  goodbyeCanvas = new canvas.Goodbye();
let image = await goodbyeCanvas
  .setUsername("${username}")
  .setDiscriminator("${discrim}")
  .setMemberCount("${members}")
  .setGuildName("${guild}")
  .setAvatar("${avatar}")
  .setColor("border", "#ff5c33")
  .setColor("username-box", "#ff0000")
  .setColor("discriminator-box", "#ff0000")
  .setColor("message-box", "#ff0000")
  .setColor("title", "#ff0000")
  .setColor("avatar", "#ff5c33")
  .setBackground("${background}")
  .toAttachment();
let attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye.png");
message.channel.send(attachment);
})()]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leavemessage];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
$onlyIf[$getServerVar[leavemessage]!=;]
$onlyIf[$getServerVar[leavechannel]!=;]
$onlyIf[$getServerVar[leavechannel]==$channelID;]
$suppressErrors[**⛔ Error**{delete:1s}]`
})
bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})
 
bot.onLeave();
bot.awaitedCommand({
 name: "awaitReaction1",
 code: `$editMessage[$message[1];{title:Help} {description:Help Command Pages:
1️⃣ - Example Page 1
2️⃣ - Example Page 2} {color:RANDOM}
]
`})

bot.awaitedCommand({
 name: "awaitReaction2",
 code: `
 $editMessage[$message[1];{title:Page 1} {description:Hello world! Page 1 Here! Edit Here!} {color:RANDOM} {footer:🔄 - Return to home page}
]
 `
})

bot.awaitedCommand({
 name: "awaitReaction3",
 code: `
 $editMessage[$message[1];{footer:🔄 - Return to home page}
{title:Page 2} {description:Hello again! New Page! Edit Here!} {color:RANDOM} 
]
 `
})
