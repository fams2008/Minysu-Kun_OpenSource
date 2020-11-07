const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/1Ulllrh.gif',
  'https://imgur.com/ALEvxfj.gif',
  'https://imgur.com/T09Oezb.gif',
  'https://imgur.com/8GQGijl.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para começar a namorar e trair seu namorado/a. **ATENÇAO se voce usar isto e estiver acompanhado voce estara traindo seu namorado/a e se o usuario nao quiser  namorar com voce ele pode-se separar fazendo >separar** ');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('trair')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de trair o seu namorado/a com o/a ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('TRAIDOR :broken_heart:')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}