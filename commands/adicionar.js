const Discord = require("discord.js");
exports.run = async (client, message, args) => {
const invite = new Discord.MessageEmbed()
if(message.author.id == "712362978288074834")
    return message.reply(
      "Estas banido de usar todos os meus comandos")

        .setTitle('Meu Convite')
        .setColor('#0ffcb2')
        .setDescription(`[Clica aqui para Invitares-me])`)
        .setTimestamp()
        .setFooter("Obrigado");






await message.channel.send(invite);
}
