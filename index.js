const API_KEY = '';
const conversionUtil = require('./conversion.js');
const Discord = require('discord.js');
const client = new Discord.Client();

const indignation = [ "u avin a giggle?",
"ur a cheeky lil cunt ill give u dat",
"ill shag ur mum, wanker",
"imma shiv ur nan outside tescos u fokin nonce",
"ur doin me nut in",
"fak off m8",
"dat request wrong innit?"];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var str = msg.content;
  var isbot = msg.author.bot;
  var rxpat = /-?(\d*\.?\d+|\d+\.?\d*)(f|c)/gi;
  if (!isbot && rxpat.test(str)) { //message is of interest
    // try{
      var expr = str.match(rxpat).toString();
      // console.log(expr);
      var value = parseFloat(expr.substring(0,expr.length-1));
      // console.log("Parsed Value: " + value);
      var unit = expr[expr.length-1].toLowerCase();
      var digits = expr.match(/\d/g).length; //number digits
      // console.log("Digits: " + digits);
      var ans;
      if (unit == "f") { //temperature is fahrenheit
        // console.log("F condition");
        ans = conversionUtil.f2c(value);
        // console.log("Converted value: " + ans);
        if (Math.abs(ans - Math.round(ans)) > 0){ //check for nonzero remainder
          ans = ans.toPrecision(digits);
        }
        msg.reply(value + 'F is ' + ans + 'C, innit?');
      }
      else if (unit == "c") { //temperature is celsius
        ans = conversionUtil.c2f(value);
        // console.log("Converted value: " + ans);
        if (Math.abs(ans - Math.round(ans)) > 0){ //check for nonzero remainder
          ans = ans.toPrecision(digits);
        }
        msg.reply(value + 'C is ' + ans + 'F, innit?');
      }
      // }catch{
      //   var rng = Math.round( Math.random() * (indignation.length-1) );
      //    msg.reply(indignation[rng]);
      //    console.log("Rng: " + rng);
      // }

    }
  });

  client.login(API_KEY);
