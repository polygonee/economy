
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('shardDisconnect', () => reqEvent('disconnect')(client));
  client.on('guildCreate', reqEvent('guildCreate'))
};
