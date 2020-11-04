});

client.on("guildMemberAdd", async (member) => {                            //este e o do joao

  let guild = await client.guilds.cache.get("762737164584353833"); //id do server
  let channel = await client.channels.cache.get("762738158306983977"); //id do canal
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "<:hyper_XD:754793950841143336>");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(` <:hyper_XD:754793950841143336> Bem Vindo `)
      .setImage("https://imgur.com/erUPA7W.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros, se fosse a ti arranjava uma gang**, diverte-te no FiveM! `)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de minysu-kun  made by famam20082")
      .setTimestamp();

    channel.send(embed);
  }
});

let memberlog = "754760872919957565"; //mete o ID do canal

client.on("guildMemberAdd", member => {
  if (member.guild.id !== "754760010038247607") return; //mete ID do server
  
  client.channels.cache.get(memberlog).send(`Welcome to the **${member.guild.name}**, <@!${member.user.id}> !!!`);
  member.roles.add("754763083850842154"); // mete o ID de membro fazend +roleinfo e copias a mençao sem os <@&
})

client.on("guildMemberRemove", member => {   // isto so ta a tua nao precisas de configurar desta linha para baixo
  if (member.guild.id !== "520423098906968065") return;
  
  client.channels.cache.get(memberlog).send(`So long... **${member.user.tag}** ... :(`);
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
		return;
	if (
		message.content.startsWith(`<@!${client.user.id}>`) ||
		message.content.startsWith(`<@${client.user.id}>`)
	)
		return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});
client.on('ready', () => {
	let activities = [
   ` beijar pamonha-chan`,
   ` ?help para obter ajuda`
   ],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'PLAYING'
		 }), 2250);
	client.user.setStatus('online').catch(console.error);
	console.log('Estou Online!');
});

client.login(process.env.TOKEN);
