module.exports = {
name: "warn",
code: `
$color[RANDOM]
$title[Warned $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has warned **$username[$mentioned[1;yes]]** for \`$noMentionMessage\`
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings
]
$setUserVar[reason;$getUserVar[reason;$mentioned[1]]/**$date+:$hour:$minute:$second**+> $noMentionMessage+;$mentioned[1]]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$message[2]!=;**⛔ Provide a reason**]
$onlyIf[$mentioned[1]!=;**⛔ Mention the user you want to warn and provide a reason**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't warn yourself**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGAGE_ROLES\` perms]`
}