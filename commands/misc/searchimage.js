module.exports = {
    name: 'image',
    aliases: ['img'],
    code: `$title[Results for $message] 

$image[$jsonRequest[http://api.somecool.repl.co/image-search?query=$message;result;:x:** | No results found**]] 

$color[$random[0;999999]] 

$addTimestamp`
}