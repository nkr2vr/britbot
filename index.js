const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NzM4NzgxNzk0MjMyNTY1ODAw.XyQ6KQ.z4wQuw9NSNncFuPrE1YGGgIYB6o');
