module.exports = {
 name: "ui",
 usage: "ui/user/userinfo (user)",
 description: "Shows your statistics or another user",
 aliases: ['user', 'userinfo'],
 code: `
 $if[$isBot[$findUser[$message]]==false]
 $thumbnail[$userAvatar[$findUser[$message]]]
 $title[$username[$findUser[$message]]'s Info]
 $description[**Name:** $username[$findUser[$message]]
 **Status:** $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message]];offline;:black_circle: Offline;-1];online;:green_circle: Online;-1];dnd;:red_circle: DND;-1];idle;:yellow_circle: Idle;-1]
**Platform:** $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$message]];none;:question: None;-1];web;:page_facing_up: Web;-1];mobile;:mobile_phone: Phone;-1];desktop;:desktop: PC;-1]
**Creation date:** $creationDate[$findUser[$message];date]]
$color[random]

$else
$thumbnail[$userAvatar[$findUser[$message]]]
$title[$username[$findUser[$message]]'s Info]
$description[**Name:** $username[$findUser[$message]] (BOT)
**Status:** $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message]];offline;:black_circle: Offline;-1];online;:green_circle: Online;-1];dnd;:red_circle: DND;-1];idle;:yellow_circle: Idle;-1]
**Platform:** $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$message]];none;:question: None;-1];web;:page_facing_up: Web;-1];mobile;:mobile_phone: Phone;-1];desktop;:desktop: PC;-1]
**Creation date:** $creationDate[$findUser[$message];date]]
$color[random]
$endif
`}