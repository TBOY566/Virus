module.exports ={
    name: '$alwaysExecute',
    code:`
$jsonRequest[https://api.udit.gq/api/chatbot?message=$replaceText[$message; ;+];message;]

$onlyForChannels[$getServerVar[chatbot];]

$onlyIf[$getServerVar[chatbot]=!not set;]
`
}