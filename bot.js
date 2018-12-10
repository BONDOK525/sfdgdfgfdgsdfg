const Discord = require('discord.js');
const client = new Discord.Client();
console.log("ٍSpam Bot By itzZa1D , VM#8866");

client.on("ready", () => {
let channel =     client.channels.get("512401531392491553")
setInterval(function() {
channel.send(`bondok`);
}, 25)
})
 
client.login('TOKEN');
