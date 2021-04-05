module.exports = {
 name: "tempban",
 code: `
 <@$mentioned[1]> has been successfully unbanned due to temp-ban.
 $unban[$mentioned[1]]
 $wait[$message[2]]
 $ban[$mentioned[1]]
 $channelSendMessage[$channelID;<@$mentioned[1]> has been successfully temp-banned for $message[2], I will send a message when they are unbanned.]
 $argsCheck[>2;Please mention a user to temp-ban & enter a time!]
 `
}