const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/EwMLz4K.gif',
  'https://imgur.com/IfEbsAX.gif',
  'https://imgur.com/iQXny67.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para apertar mãos** ');
}
/*
message.channel.send(`${message.author.username} **acaba de apertar mãos com a/o** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Apertinho')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de apertar mãos com a/o ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(':heart:')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}