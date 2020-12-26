// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require('../utils/structures/BaseEvent');

const GuildConfig = require('../database/schemas/GuildConfig');
const { Message } = require('discord.js');
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) {
    try{
      const guildConfig = await GuildConfig.create({
        guildId: guild.id,
  
      });
      console.log(`Bot has joined a server. Now operating on ${guild.cache.size} servers.`)
    } catch(error){
      console.log(error)
    }
  }
}