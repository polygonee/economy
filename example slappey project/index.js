const { AkairoClient } = require('discord-akairo');
require('dotenv').config();

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: process.env.OWNER_ID
        }, {
            // Options for discord.js goes here.
        });
    }
}

const client = new MyClient();
client.login('TOKEN');