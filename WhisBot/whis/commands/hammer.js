module.exports = {
  name: 'hammer',
  description: '',
  execute(message, args, settings, client){
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('You can\'t throw a hammer at thin air, pick someone you baka.');
    if (message.mentions.users.first().id == client.user.id) return message.channel.send(`LOL nope, ***hammer thrown at ${message.mentions.users.first().username}***`)
    if (message.mentions.users.first().id === settings.ownerid) return message.reply('The hammer curved back and hit you. You died.')
    if (message.author.id === settings.ownerid) return message.reply(`${message.mentions.users.first().username} got too close to the sun and died. Owned.`)
    message.channel.send(`${message.author.username} hit ${message.mentions.users.first().username} with a hammer. :hammer:`)
  }
}