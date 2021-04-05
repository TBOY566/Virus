module.exports ={
 name: "enable-suggest",
 code: ` 
$setServerVar[suggest_system;true]
Enabled! 
$onlyPerms[manageserver;You need manage server permissions]`
 }