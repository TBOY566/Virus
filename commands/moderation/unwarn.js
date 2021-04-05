module.exports = {
name: "unwarn", 
code: `
$color[RANDOM]
$title[Removed Warn from $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has removed a warn from **$username[$mentioned[1;yes]]** 
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings]
$setUserVar[warn;$sub[$getUserVar[warn;$findUser[$message]];1];$findUser[$message]]
$removeSplitTextElement[$getTextSplitLength]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The Warnings of this User is already at 0**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't unwarn yourself**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**, Correct usage: \`$getServerVar[prefix]unwarn <@user>\`]
$onlyPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]`
}