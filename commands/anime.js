const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/9tpDtMn.jpg',
  'https://imgur.com/YRSZ5Ba.jpg',
  'https://imgur.com/VA7zWeA.jpg',
  'https://imgur.com/xd9RyBl.jpg',
  'https://imgur.com/OGQULsz.jpg',
  'https://imgur.com/ZxIpNsX.jpg',
  'https://i.imgur.com/kO3gvML.jpg',
  'https://imgur.com/wU9oiIR.jpg',
  'https://imgur.com/VeDvVyx.jpg',
  'https://imgur.com/FDz6i28.jpg',
  'https://imgur.com/bY9CFVt.jpg',
  'https://i.imgur.com/WyMkSr5.jpg'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('AnimeForever')
        .setColor('#0ffcb2')
        .setDescription(`${message.author} Espero que gostes do anime, **JÁ AGORA VÊ A DESCRIÇÃO DO EMBED** [COMANDO EM BETA] `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Lista de animes: Domestic nakanojo, Darling in the franxx , Sword Art Online, Naruto, Clannad, One Piece, DeathNo##, Love Life, Violet Evergarden, Laid-Back Camp, OreGairu: My Teen Romantic Comedy SNAFU, hyouka ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
//copia este comando ele e muito importante