module.exports ={
 name: "chatbot-set",
 code: `
$title[✅ | Task complete] 
$description[The chatbot channel has been changed to <#$findChannel[$message]>]
$color[RANDOM]
$addTimestamp

$setServerVar[chatbot;$findChannel[$message]]

$onlyPerms[manageserver;You need manageservers permision]

$argsCheck[1;Put a valid channel]
`
}