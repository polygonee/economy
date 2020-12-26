module.exports = {
  name: 'kick',
  description: '',
  execute(client, message, args, Discord, customisation, settings){
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);
  if (user.id === message.author.id) return message.reply("I can't let you do that, self-harm is bad :(");
  if (user.id === client.user.id) return message.reply("Wow. How original. Nobody else ever tried to make the bot harm itself. I applaud you for your creativity.");
  
  if (message.mentions.users.first().id === settings.ownerid) return message.reply("You can't kick my Developer :)");
  if (reason.length < 1) reason = 'No reason supplied';

  if (!message.guild.member(user).kickable) return message.reply('I am unable to kick that member');
  
  const embed = new Discord.MessageEmbed()
  .setColor(0x0000FF) 
  .setTimestamp()
  .addField('Action:', 'Kick')
  .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason)
  
  if(user.bot) return;
   message.mentions.users.first().send({embed}).catch(e =>{
    message.channel.send(e)
  });
  message.guild.member(user).kick();

  let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
  if  (!logchannel){
  message.channel.send({embed})
  }else{
    client.channels.cache.get(logchannel.id).send({embed});
    message.channel.send({embed})
  } 
  if(user.bot) return;
  message.mentions.users.first().send({embed}).catch(e =>{
    message.channel.send(e)
  });
  }
}