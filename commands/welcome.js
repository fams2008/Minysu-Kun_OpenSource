const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/XDXLUeL.gif',
  'https://imgur.com/2E4i3bb.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para se dar boas vindas');
}
/*
message.channel.send(`${message.author.username} **acaba de dar boas vindas a/o ** ${user.username}! :broken_heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('welcome')
        .setColor('#000000')
        .setDescription(`bem vindo ao server ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(' :heart: ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}