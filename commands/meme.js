const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/c5f06b7ca88b2674ec7b01d9d240c2d1/tenor.gif?itemid=14056963',
  'https://media1.tenor.com/images/9e4f4ff68c1c94dd0b21909ec36c6ed8/tenor.gif?itemid=15708943',
  'https://media1.tenor.com/images/9190e0d5f2fb568957ff0a97f143611f/tenor.gif?itemid=3433814',
  'https://media1.tenor.com/images/362720f3df3d54412a69c67d67862567/tenor.gif?itemid=8754813',
  'https://media1.tenor.com/images/52d13e6274e30ee0fe98d1c20d39a341/tenor.gif?itemid=5586037',
  'https://media1.tenor.com/images/9abdf24cb2ebfe6bdebbe980b07c9f70/tenor.gif?itemid=4402351',
  'https://media1.tenor.com/images/cff49e73e132f7dcc24530eebff64b96/tenor.gif?itemid=5463192',
  'https://media1.tenor.com/images/fccc5286b8eb6e11d0520fcc3b3116e6/tenor.gif?itemid=9039218',
  'https://media.tenor.com/images/a8f2cb74a9484d5e9bcbe78c0b763015/tenor.gif',
  'https://media1.tenor.com/images/ce9190a18e0a78eacab6bd600fd96b08/tenor.gif?itemid=5061993',
  'https://media1.tenor.com/images/3a8c2b86e9938ede7b202490e3102929/tenor.gif?itemid=12904194',
  'https://media1.tenor.com/images/e891766dd54253cd3fa763da1c959591/tenor.gif?itemid=4184925',
  'https://media1.tenor.com/images/12bc4c42916996c70d410bb25252e93b/tenor.gif?itemid=5658547',
  'https://media1.tenor.com/images/cbfa19e9385b2171a6ab65e4cadf39c8/tenor.gif?itemid=4840574'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Meme <:hyper_XD:754793950841143336>')
        .setColor('#0ffcb2')
        .setDescription(`${message.author} Levaste um meme na cara`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('fodas!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
//copia este comando ele e muito importante