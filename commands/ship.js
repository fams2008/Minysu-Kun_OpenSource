const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/fdARr32.gif', 
  'https://imgur.com/UBghtK0.gif', 
  'https://imgur.com/uBvhfNX.gif', 
  'https://imgur.com/i18FWs8.gif',
  'https://imgur.com/s18YYFu.gif',
  'https://imgur.com/b5gjSXT.gif',
  'https://imgur.com/K7M0lhH.gif',
  'https://imgur.com/DBzwes7.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para se shipar');
}
/*
message.channel.send(`${message.author.username} **acaba de separar** ${user.username}! :broken_heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('ship')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de shipar o/a ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('fodas!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}