const Discord = require('discord.js');
 const client = new Discord.Client();

const BUFFER_SIZE = 40;
const indignation = [ "u avin a giggle?",
  "ur a cheeky lil cunt ill give u dat",
  "ill shag ur mum, wanker",
  "imma shiv ur nan outside tescos u fokin nonce",
  "request is a bit long m8, ur doin me nut in",
  "fak off m8",
  "dat request is bare long innit?"];

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
  var str = msg.content;
  var rxpat = /oi\s+bruv\s+wots\s+-?\d+\.?\d+(f|c)/i;
  if (rxpat.test(str)) {
   if (str.length > BUFFER_SIZE){
     var rng = Math.round(Math.random()*indignation.length);
      msg.reply(indignation[rng]);
    } else {
   var tmp = str.match(/-?\d+\.?\d+(f|c)/i);
   var tmpval = str.match(/-?\d+\.?\d+/);
   var digits = tmpval.toString().length;
   if (tmpval.toString().match(/-/)){ //check negative
     digits = digits - 1;
   }
   if (tmpval.toString().match(/\.\d/)){ //check decimal with stuff after
     digits = digits - 1;
   }
   var unitpatt = /f/i;
   var ans;
   var floatval = parseFloat(tmpval);
   if (unitpatt.exec(tmp)) { //temperature is fahrenheit
     ans = (floatval-32)/1.8;
     if (Math.abs(ans - Math.round(ans)) > 0){ //check for nonzero remainder
       ans = ans.toPrecision(digits);
     }
     msg.reply(floatval + 'F is ' + ans + 'C, innit?');
   }
   else { //temperature is celsius
     ans = (floatval*1.8)+32;
     if (Math.abs(ans - Math.round(ans)) > 0){ //check for nonzero remainder
       ans = ans.toPrecision(digits);
     }
     msg.reply(tmpval + 'C is ' + ans + 'F, innit?');
   }

 }
}
});

client.login('NzM4NzgxNzk0MjMyNTY1ODAw.XyQ6KQ.z4wQuw9NSNncFuPrE1YGGgIYB6o');
