module.exports ={
 name: "setleavechannel",
 code: `
$setServerVar[leavechannel;$mentionedChannels[1]]
Successfully Set Server Leave Channel To <#$mentionedChannels[1]>
$onlyIf[$mentionedChannels[1]!=;Mention a channel]
$onlyPerms[manageserver;You need manage server permission!]`
 }