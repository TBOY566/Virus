module.exports ={
    name: "serverinfo",
    aliases: ['server-info', 'server'],
    code: `$author[ Server Info]
$thumbnail[$serverIcon[$guildID]]
$description[** **
**📝 Server Name:** $serverName[$guildID]

**🆔 Server ID:** $guildID

**👑 Owner:** <@$ownerID>

**🌎 Region:** $serverRegion

**💖 Boost:** $serverBoostCount

**⏫ 💖 Boost Level:** $serverBoostLevel

**👮 Verification Level:** $replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;Very High;Level 4 (Must have a verified phone on their discord account)];High;Level 3 (Must also be a member of this server for longer than 10 minutes)];Medium;Level 2 (Must also be registered on Discord for longer than 5 minutes)];Low;Level 1 (Must have a verified email ln their Discord account)]

**📊 Members:**
All: $membersCount
Users: $sub[$membersCount;$botcount]
Bots: $botCount

**🔥 Channels:**
All: $channelCount
Text: $channelCount[text]
Voice: $channelCount[voice]

**📄 Roles:** $guildRoles

**📅 Creation Date:** $creationDate[$guildID]

**😎 Emojis:**
$serverEmojis]
$addTimestamp
$color[RANDOM]`
}