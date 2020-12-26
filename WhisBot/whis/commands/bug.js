module.exports = {
  name: 'bug',
  description: '',
  execute(message, args, Discord, customisation, client){
    if (!args[0]) return message.reply("Please specify the bug.");
    if (args[0] === "bug") return message.reply("Please specify the bug.");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug! <a:balancecheck:556017659419033653>");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(customisation.bugchannelid).send(content)
  }
  
}
