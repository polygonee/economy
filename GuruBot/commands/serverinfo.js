module.exports = {
    name: 'serverinfo',
    description: 'gives info about the server',
    execute(message, args, Discord, guild){
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${guild.name} (${guild.id})`)
        .addField('Created On', guild.createdAt.toLocaleString(), true)
        .addField('Guild Owner', guild.owner.user.tag)
        .addField('Total Members', guild.memberCount, true)
        .addField('Total Real Members', guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField('Total Bots', guild.members.cache.filter(member => member.user.bot).size, true)
        .addField('Total Channels', guild.channels.cache.size, true)
        .addField('Total Text Channels', guild.channels.cache.filter(ch => ch.type === 'text').size, true)
        .addField('Total Voice Channels', guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
        .setColor('#5CC5FF')
        .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`);
        message.channel.send(embed);
    }
}