const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/5uOC0IU.gif',
  'https://imgur.com/USCfb6e.gif',
  'https://imgur.com/WKp8CbH.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para correr dele!');
}
/*
message.channel.send(`${message.author.username} **acaba de correr de** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('correr')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de correr de ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('corre so corre')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}