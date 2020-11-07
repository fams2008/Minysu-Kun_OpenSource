const Discord = require('discord.js');

exports.run = async (client, message, args) => {

await message.channel.send(`Oi eu atualmente estou em ** ${client.guilds.cache.size} servidores** e ao todo tenho ** ${client.users.cache.size} membros ** me usando`);
}