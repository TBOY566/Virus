module.exports = {
name: "warnings", 
code: `$color[RANDOM]
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s warnings]
$description[
**$username[$mentioned[1;yes]]** has
\`$getUserVar[warn;$findUser[$message]]\` warnings

**Warnings User**
<@$mentioned[1;yes]> 
(\`$mentioned[1;yes]\`)]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The warnings of this user is already at 0**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot, so they don't have warnings**]`
}