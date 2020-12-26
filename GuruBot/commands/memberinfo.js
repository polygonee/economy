module.exports = {
    name: 'memberinfo',
    description: 'gives you info about a member',
    execute(message, args, Discord){
        if(args.length > 2){
            return message.reply('❌ Incorrect usage. Usage: `memberinfo <mention>`')
        }
            const member = message.mentions.members.first();

            if(member){
                const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setAuthor(`${member.user.tag}, (${member.user.id})`)
                .addField('Created On', member.user.createdAt.toLocaleString(), true)
                .addField('Joined On', member.joinedAt, true)
                .addField('Kickable', member.kickable, false)
                .addField('Presence', member.presence.status)
                .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`);
                message.channel.send(embed)
            } else {
                message.channel.send('I wasn\'t able to find that member. Usage: `memberinfo <mention>`')
            }
    }
}