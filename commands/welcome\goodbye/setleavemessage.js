module.exports ={
 name: "setleavemessage",
 code: `
$setServerVar[leavemessage;$message]
Set Server Leave Message To $message
$onlyIf[$getServerVar[leavechannel]!=;This Server Has No Join Leave! Set it by $getServerVar[prefix]setleavemessage
(channel)]
$argsCheck[>1;Write something]
$onlyPerms[manageserver;You need manage server permission]`
 }
