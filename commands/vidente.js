const Discord = require("discord.js");
exports.run = async (client, message, args) => {
var list  = [
"Sim",
"Não",
"Talvez",
"Claro!",
"És Burro Porra!",
"Nos Somos os XD's",
"corno 🐮",
"Estas-me A assustar, Para és okward!",
"Es mesmo Sexy",
" 😳👉👈 ",
"||Seu Idiota eu sou uma fraude||"



];
var rand = list[Math.floor(Math.random() * list.length)];
if(message.author.id == "712362978288074834")
    return message.reply(
      "Estas banido de usar todos os meus comandos")
  const wut  = new Discord.MessageEmbed()
  .setTitle("A Gloriosa MinySu-Kun disse que")
  .setDescription(rand)
  .setColor('#0ffcb2')

  await message.channel.send(wut);
}
