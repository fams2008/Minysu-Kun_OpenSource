const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/wt6uyJ5.gif',
  'https://imgur.com/qYdY7pg.gif',
  'https://imgur.com/khAM6Et.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para se separar COMANDO EM BETA');
}
/*
message.channel.send(`${message.author.username} **acaba de separar** ${user.username}! :broken_heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('date')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de separar do/a ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('TRISTE!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}