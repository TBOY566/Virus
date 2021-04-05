module.exports = {
name: "video",
code: `$djsEval[require('yt-search')(d.args.join(' ')).then(x => {
const dc = require('discord.js')
let body = x.all[0\\]
let title = body.title
let url = body.url
let thumb = body.thumbnail
let stamp = body.timestamp
let desc = body.description
let id = body.videoId
let type = body.type
let dur = body.seconds
let author = body.author.name
let authorurl = body.author.url
let uploadedAt = body.ago
let views = body.views
message.channel.send(
new dc.MessageEmbed()
.setTitle(title)
.setURL(url)
.setColor('RANDOM')
.setDescription(desc)
.setThumbnail(thumb)
.addField('Artist', '#RIGHT#'+author+'#LEFT#\\('+authorurl+'\\)')
.addField('Uploaded', uploadedAt)
.addField('Video Information', '\\\`\\\`\\\`\\n• Type#COLON# '+type+'\\n• ID#COLON# '+id+'\\n• Duration#COLON# '+stamp+' \\('+dur+' Seconds\\)\\n• Views#COLON# '+views+'\\n\\\`\\\`\\\`')
.setFooter('© Powered by Nao Tomori#6075', message.author.displayAvatarURL())
)
})]
$onlyif[$djsEval[require('yt-search')(d.args.join(' ')).then(x => x.all[0\\].title);yes]!=undefined;Not found:c]
$onlyif[$message!=;Type the title / url]`
}