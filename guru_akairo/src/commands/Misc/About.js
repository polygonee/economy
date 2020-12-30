const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class AboutCommand extends Command {
    constructor() {
        super('about', {
          aliases: ['about', 'info'],
          category: 'Miscellaneous',
          description: {
            content: 'Displays information about Guru.',
            permissions: ['EMBED_LINKS']
          },
          clientPermissions: ['EMBED_LINKS']
        })
    }

    async exec(message) {
      const embed = new MessageEmbed()
        .setColor(this.client.color)
        .setTitle(`${this.client.user.username} information`)
        .setThumbnail(this.client.avatar)
        .addField('Created by', `\`${this.client.users.cache.get(this.client.ownerID[0]).tag} (${this.client.ownerID[0]})\``)
        .addField('Language', '[NodeJS](https://nodejs.org/en/) ([discord.js](https://discord.js.org/#/))')
        .addField('Framework', '[discord-akairo](https://discord-akairo.github.io/#/)')
        .addField('Color', this.client.color)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
      return message.util.send(embed);
    }
}

module.exports = AboutCommand;