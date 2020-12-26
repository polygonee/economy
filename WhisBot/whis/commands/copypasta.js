module.exports = {
  name: 'copypasta',
  description: '',
  execute(message, args, Discord, copypastas){
    args = args.join(" ");
    const copy = new Discord.MessageEmbed()
    .setColor('#e8d192')
    .setTitle('Copypasta')
    .setDescription(copypastas[Math.floor(Math.random() * copypastas.length)])
    message.channel.send(copy);
  }
}
