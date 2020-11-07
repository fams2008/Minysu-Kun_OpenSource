const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/uZ2xuFa.gif',
  'https://imgur.com/itofuLp.gif',
  'https://imgur.com/Y23o1tU.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para FOD##-LHE TODINHO!!');
}
/*
message.channel.send(`${message.author.username} **acaba de FODER##-LHE TODO** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('slap')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de levar no fucinho seu cabr## nunca desafies-lhe YEET! ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Leva No FUÇINHO!!!! MUAHAHAHA !!! #MACACOUM!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}