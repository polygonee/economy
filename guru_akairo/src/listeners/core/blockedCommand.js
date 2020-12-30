const { Listener } = require('discord-akairo');

class CommandBlockedListener extends Listener {
    constructor() {
        super('commandBlocked', {
            emitter: 'commandHandler',
            event: 'commandBlocked'
        });
    }

    exec(message, command, reason) {
        return message.channel.send(`**Blocked from using command ${command.id}**. Reason: \`${reason === 'owner' ? 'Owner only' : reason}\``);
    }
}

module.exports = CommandBlockedListener;