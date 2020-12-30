const { Command } = require('discord-akairo');

class InviteCommand extends Command {
  constructor() {
    super('invite', {
      aliases: ['invite', 'inv'],
      category: 'Miscellaneous',
      description: {
        content: 'Get the invite link for the bot.',
        permissions: ['EMBED_LINKS']
      },
      clientPermissions: ['EMBED_LINKS']
    });
  }

  async exec(message) {
    return message.util.send('I would like it if you could use my vanity url so I can analyse stuff. https://dsc.gg/guru');
  }
}

module.exports = InviteCommand;