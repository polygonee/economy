const { ShardingManager } = require('discord.js');
const Logger = require('../log');
require('dotenv').config();

const manager = new ShardingManager('rada.js', {
    totalShards: '5',
    token: process.env.TOKEN
});

manager.spawn();
manager.on('shardCreate', (shard) => (new Logger).shardLogin(`Shard ${shard.id} connected`));