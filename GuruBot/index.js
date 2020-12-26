const Discord = require('discord.js');

const fs = require('fs');

const client = new Discord.Client();

const prefix = 'g.';

const userCreatedPolls = new Map();

const search = require('youtube-search'); 

const opts = {
    maxResults: 25,
    type: 'video'
};

const token = 'Nzg3NDkwMjQ0MzQ5MTMyODQx.X9VtcQ.ggYSRVDS7n0JPLyB1oCCqzC6lzs'


client.on('ready', () => {
    console.log('Guru has come online.');
});


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.on('message', async message=>{
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    const guild = message.guild;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'memberinfo' || command === 'm.info'){
        client.commands.get('memberinfo').execute(message, args, Discord)
    } else if (command === 'serverinfo' || command === 's.info'){
        client.commands.get('serverinfo').execute(message, args, Discord, guild)
    } else if (command === 'createpoll' || command === 'newpoll' || command === 'poll'){
        client.commands.get('createpoll').execute(message, args, Discord, userCreatedPolls)
    } else if (command === 'cancelpoll' || command === 'stoppoll'){
        client.commands.get('cancelpoll').execute(message, args, Discord, userCreatedPolls)
    }
})

client.on('messageDelete', message => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Deleted Message')
    .addField('Author', `${message.author.tag} (${message.author.id})`, true)
    .addField('Channel', `${message.channel.name} (${message.channel.id})`, true)
    .setDescription(message.content)
    .setTimestamp();
    message.channel.send(embed);
    
});


client.login(token)