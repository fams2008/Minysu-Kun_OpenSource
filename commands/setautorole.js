const db = require('quick.db')

exports.run = (bot, message, args, func) => {
  
  if (!message.mewmber.hasPermission('ADMINISTATOR')) return message.channel.send('isto requer permissão de ADMISTRATOR)
  if (!args.join(" ")) return message.channel.send('por favor mete estes argumentos. `setAutoRole` <roleName>') //tell them if they didnt supply argument
   
   db.updateText)`autoRole_${message,guild.id}`, args.join(" ").trim()).then(i => { //trim() removes the whitespaces on both ends of sring.

       message.channel.send('susseco! mudaste autorole para: ' + i.text); //this tells them what they just set the autorole to

   })

   }