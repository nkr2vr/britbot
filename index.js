const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
var str = msg.content;
var rxpat = /oi\s+bruv\s+wots\s+\d+[f|c]/i;
 if (rxpat.test(str)) {
   var tmp = str.match(/\d+[f|c]/i);
   var tmpval = str.match(/\d+/);
   var unitpatt = /f/i;
   tmpval = parseInt(tmpval);
   if (unitpatt.exec(tmp)) { //temperature is fahrenheit
     msg.reply(tmpval + 'F is ' + (tmpval-32)/1.8 + 'C, innit?');
   }
   else { //temperature is celsius
     msg.reply(tmpval + 'C is ' + ((tmpval*1.8)+32) + 'F, innit?');
   }

 }
 });

client.login('NzM4NzgxNzk0MjMyNTY1ODAw.XyQ6KQ.z4wQuw9NSNncFuPrE1YGGgIYB6o');
