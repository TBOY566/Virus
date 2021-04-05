module.exports = {
 name: "shiprate",
 code: `
<@$authorID>

**$userTag[$mentioned[1]]** and **$userTag[$mentioned[2;yes]]** are **$random[0;101]%** compatible $replaceText[$replaceText[$checkCondition[$random[0;101]==101];true;They are a perfect match 💖];false;❤️]

$attachment[https://api.cool-img-api.ml/ship?user=$replaceText[$userAvatar[$mentioned[1]];webp;png]&user2=$replaceText[$userAvatar[$mentioned[2;yes]];webp;png];love.png]

$onlyIf[$mentioned[1]!=;**:x: | You need to mention someone**]
`
}