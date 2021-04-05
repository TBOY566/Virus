module.exports ={
 name: "setjoinchannel",
 code: `
$setServerVar[joinchannel;$mentionedChannels[1]]
Set Server Joinchannel To <#$mentionedChannels[1]>
$onlyIf[$mentionedChannels[1]!=;Mention a channel]
$onlyPerms[manageserver;You need manage server permission]`
 }