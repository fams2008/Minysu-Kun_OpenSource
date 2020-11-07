const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/UX5b8Tr.gif',
  'https://imgur.com/o80hc2V.gif',
  'https://imgur.com/aAO1ZGU.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('hug')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar sera que ainda estao an friend zone? ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('ABRAÇINHO!!!! AGORA!!! MACACOUM!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}