module.exports ={
 name: "avatar",
 aliases: ['av', 'pfp'],
 code: `
 $title[$username[$findUser[$message]]'s Avatar]

 $description[[PNG\\]($replaceText[$userAvatar[$findUser[$message]];webp;png]) ╏ [WEBP\\]($replaceText[$userAvatar[$findUser[$message]];png;webp]) ╏ [JPEG\\]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]

 $image[$userAvatar[$findUser[$message]]]

$color[RANDOM]

$addTimestamp
`
}