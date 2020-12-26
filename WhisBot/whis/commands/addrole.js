module.exports = {
    name: 'addrole',
    description: 'adds a role to somebody',
    execute(message, args, Discord, settings, client){
        //code
        if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("❌**Error:** I don't have the **Manage Roles** permission!");
        if (message.mentions.users.size === 0) return message.reply("❌Please mention a user to give the role to.\nUsage: `addrole @user <role>`");
        let member = message.guild.member(message.mentions.users.first());
        if (!member) return message.reply("❌**Error:** That user does not seem valid.");
        let rname = message.content.split(" ").splice(2).join(" ");
        let role = message.guild.roles.cache.find(val => val.name === rname);
        if (!role) return message.reply(`❌**Error:** ${rname} isn't a role...!`);
        let botRolePosition = message.guild.member(client.user).roles.highest.position;
        let rolePosition = role.position;
        let userRolePossition = message.member.roles.highest.position;
        if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Failed to add the role to the user because your role is lower than the specified role.")
        if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:** I cannot add the role");
        member.roles.add(role).catch(e => {
            return message.channel.send(`❌**An error occured\nError:**\n${e}`);
        });
        message.channel.send(`:white_check_mark: **${message.author.username}**, I've added the **${rname}** role to **${message.mentions.users.first().username}**.`);
    }
}