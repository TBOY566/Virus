module.exports = {
name: "resume",
code: `$resumeSong
**▶️ Resumed**
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
}