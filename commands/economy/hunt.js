	
module.exports ={
name: "hunt",
code: `$color[RANDOM]
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet];$random[50;100]]]
$title[$username is hunting]
$description[You hunted a $randomText[🥿;👠;👡;👢;👞;👟;🥾;🐇;🦝;🐸;🐲;🍖;🐀;🕷;🦅;🦄;🐶;🐵;👾;🥩;🍗;🦆] and you get $$random[50;100]]
$globalCooldown[15m;**⏳ You can fish again in %time%**]`
}