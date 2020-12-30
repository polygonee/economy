const { Command } = require('discord-akairo');

class ReverseCommand extends Command {
    constructor() {
        super('reverse', {
           aliases: ['reverse', 'rev'],
           category: 'Miscellaneous',
           description: {
             content: 'Reverse a string',
             permissions: []
           },
           args: [{
             id: 'text',
             type: 'string',
             match: 'rest'
           }]
        });
    }

    async exec(message, args) {
      if (!args.text) {
        return message.responder.error('**Please provide some text to reverse**');
      }
      return message.util.send(this.client.reverse(args.text));
    }
}

module.exports = ReverseCommand;