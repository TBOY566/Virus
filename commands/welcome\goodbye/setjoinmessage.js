module.exports ={
 name: "setjoinmessage",
 code: `
$setServerVar[joinmessage;$message]
Set Server Join Message To $message
$onlyIf[$getServerVar[joinchannel]!=;Server Join Message To $message
$onlyIf[$getServerVar[joinchannel]!=;This Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]
$argsCheck[>1;Write something]
$onlyPerms[manageserver;You need manage server permission]`
 }
 