module.exports = {
name: "botinfo", 
aliases: ["bi", "info"],
code: `$title[**Botinfo - $username[$clientID]**]
$color[$replaceText[$getRoleColor[$highestRole[$clientID]];000000;ffffff]]
$footer[Creation date: $splitText[1] | uptime: $uptime]
$thumbnail[$userAvatar[$clientID]]
 
$textSplit[$creationDate[$clientID;date];,]
 
$addField[**Invite me**;[Click here\\](https://discord.com/api/oauth2/authorize?client_id=786897949921771541&permissions=8&scope=bot%20applications.commands "Invite me to your server!")]
$addField[**Users**;**\`\`\`$allMembersCount\`\`\`**]
$addField[**Channels**;**\`\`\`$allChannelsCount\`\`\`**]
$addField[**Servers**;**\`\`\`$serverCount\`\`\`**]
$addField[**Version**;**\`\`\`1.0.0\`\`\`**]
$addField[**Library**;**\`\`\`DBD.js v$packageVersion\`\`\`**]
$addField[**Developer**;**\`\`\`$userTag[$botOwnerID]\`\`\`**]
`
}


