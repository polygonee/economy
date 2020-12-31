const { Inhibitor } = require('discord-akairo');

class Mention extends Inhibitor {
    constructor() {
        super('message', {
            type: 'all'
        });
    }

    exec(message) {
        const pings = [`<@${this.client.user.id}>`, `<@!${this.client.user.id}>`];
        if(!message.guild == true)return;
        const prefix = this.client.settings.get(message.guild.id, 'prefix', message.guild.prefix)
        if (pings.some(p => message.content === p)) {
            return message.reply(`My prefix in this guild is \`${prefix}\`. If you need more help, use the command ${prefix}help or stop by my support server > dsc.gg/black.`);
        }
    }
}

module.exports = Mention;
