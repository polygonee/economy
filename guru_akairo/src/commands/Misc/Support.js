const { Command } = require('discord-akairo');

class SupportCommand extends Command {
    constructor() {
      super('support', {
        aliases: ['support'],
        category: 'Miscellaneous',
        description: {
            content: 'Need help? Come join the Guru server, we\'d love to help!',
            permissions: []
        }
      });
    }

    async exec(message) {
        return message.responder.success('**You can join the Guru server here** https://dsc.gg/black. ')
    }
}

module.exports = SupportCommand;