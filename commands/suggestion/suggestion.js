module.exports ={
 name: "suggest",
 code: `
 $useChannel[$getServerVar[suggestchannel]]
 $title[**New Suggestion!**]
 $description[
 Username: $username[$authorID]
 Suggestion: $message]
 $color[RANDOM]
 $footer[✔ like it / ❌ didnt like it]
 $thumbnail[$userAvatar[$authorID]]
 $addCmdReactions[✔]
 $addReactions[✔;❌] 
$onlyIf[$getServerVar[suggestchannel]!=;This server has no suggest channel run **<setsuggestchannel** to set one!]
$onlyIf[$getServerVar[suggest_system]==true;Suggest system is not enabled!]

 `
 }