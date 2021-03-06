const { Listener } = require('discord-akairo');
const { readdirSync } = require('fs');

module.exports = class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        this.client.log.success(`Loaded ${this.client.listenerHandler.modules.size} listeners`);
        this.client.log.success(`Loaded ${this.client.inhibitorHandler.modules.size} inhibitors`);
        this.client.log.success(`Loaded ${this.client.commandHandler.modules.size} commands`);
        this.client.log.success(`Loaded ${readdirSync(process.cwd() + '/lib/extensions').length - 1} extensions`);
        this.client.log.success(`Loaded ${readdirSync(process.cwd() + '/src/models').length - 1} models`);
    	this.client.user.setActivity('Life | g.help | dsc.gg/guru', { type: 'COMPETING' })
        this.client.log.success(`Established connection to the Discord API`);
        this.client.log.success(`Guru has logged in.`);
        this.client.Cli.start();
    }
}