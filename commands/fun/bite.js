module.exports = {
name: "baka",
description: "Generate random baka img / gif",
usage: "baka <user/mention/id (optional)>",
code: `
 
$title[:dance: $userTag[$findUser[$message[1]]] BAKA]
$image[$jsonRequest[https://api.avux.ga/baka?key=79FJ1Q9-T6ZMGXE-KYGSY54-XT8YM0J;message;]]
$footer[Requested By $userTag[$authorID];$authorAvatar]
$addTimestamp
$color[RANDOM]

`}