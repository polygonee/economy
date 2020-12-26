module.exports = {
  name: 'fight',
  description: '',
  execute(message, args, settings, fights){
    let user = message.mentions.users.first();
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('You can\'t fight thin air, pick someone to fight.');
    if(message.mentions.users.first().id === settings.ownerid) return message.reply('You were dealt ∞ damage and died');
    message.channel.send(`${message.author.username} is fighting ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
  } 
}