module.exports ={
 name: "disable-suggest",
 code: `
$setServerVar[suggest_system;no]
Disabled!
$onlyPerms[manageserver;You need manage server permissions]`
 }