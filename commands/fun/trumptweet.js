module.exports = {
name: "trump-tweet", 
aliases: ['tt','trumptweet','trump'],
code: `$title[Donald Trump Tweeted]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;%20;-1]]
$color[RANDOM]
$onlyIf[$message[1]!=;**⛔ What you want to be tweeted by Donald Trump**]` 
}