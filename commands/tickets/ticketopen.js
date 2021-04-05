module.exports ={ 
 name: "ticket",
 code: `
$newTicket[ticket-$username[$authorID];{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!:tickets: Please give the information about your problem or feedback. 
Thanks in advance for being patient}{footer:Use close to close your ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
$sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to 
#ticket-$toLowercase[$username] to describe your issue!;Something went wrong]`
}