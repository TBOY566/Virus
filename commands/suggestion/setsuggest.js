module.exports ={
 name: "set-suggest-channel",
 code: `
$setServerVar[suggestchannel;$mentionedChannels[1]] 
Set suggest channel to <#$mentionedChannels[1]> 
$argsCheck[>1;Please mention a channel] 
$onlyPerms[manageserver;You need manage server permission]
$onlyIf[$getServerVar[suggest_system]==true;Suggest system is not enabled!]`
}