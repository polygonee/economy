// Require Packages
const Discord = require('discord.js');

// Configure Packages
const client = new Discord.Client();
const config = require('./config.json')
const prefix = config.prefix;
const active = new Map();

const invite = `https://discord.com/oauth2/authorize?client_id=${config.clientid}&scope=bot&permissions=8`

const db = require('quick.db');

client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

 
client.on('ready', () => { 
    console.log(`Bot has started to serve ${client.users.size} users!`);
  
    });

// Listener Events
client.on('message', async message => { 
    if (message.author.bot) return;
    if (message.content.toLowerCase === `${prefix}invite`){
        message.reply(`Here is the invite link --- ${invite}`)
    }
    // Check if Message is in a DM
    if (message.guild === null) {
        // Fetch Activity Info
        let active = await db.fetch(`support_${message.author.id}`);
        let guild = client.guilds.get(config.serverid); //Server ID
        let channel, found = true;
        try {
            if (active) client.channels.get(active.channelID).guild;
        } catch(e) {
            found = false;
        }
        if (!active || !found) {
            // Create Support Channel.
            active = {};
            let modRoles = guild.roles.find(config.modroleid);// Mod role id
            let everyone = guild.roles.find("name","@" + "everyone");
            let bot = guild.roles.find(config.botroleid);
            channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`);
                channel.setTopic(`${prefix}complete to close the Ticket | ModMail for ${message.author.tag}`);
                channel.overwritePermissions(modRoles, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    MANAGE_CHANNELS: true
                });
                channel.overwritePermissions(everyone, {
                    VIEW_CHANNEL: false,
                });
                channel.overwritePermissions(bot, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    MANAGE_CHANNELS: true
                });
            let author = message.author;
            const newChannel = new Discord.MessageEmbed()
                .setColor('36393E')
                .setAuthor(author.tag, author.displayAvatarURL)
                .setFooter('Thread Started')
                .addField('User', author)
                .addField('ID', author.id);
            await channel.send(newChannel);
            
            const newTicket = new Discord.MessageEmbed()
                .setColor('36393E')
                .setAuthor(`Hello, ${author.tag}`, author.displayAvatarURL)
                .setFooter('Thread Started');
                
            await author.send(newTicket);
            
            // Update Active Data
            active.channelID = channel.id;
            active.targetID = author.id;
        }
        
        channel = client.channels.get(active.channelID);
        const dm = new Discord.MessageEmbed()
            .setColor('36393E')
            .setAuthor(`Thank you, ${message.author.tag}`, message.author.displayAvatarURL)
            .setFooter(`Staff will contact you soon.`);
            
        await message.author.send(dm);
        
        const embed = new Discord.MessageEmbed()
            .setColor('36393E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(message.content)
            .setFooter(`Message Received From -- ${message.author.tag}`);
            
        await channel.send(embed);
        db.set(`support_${message.author.id}`, active);
        db.set(`supportChannel_${channel.id}`, message.author.id);
        return;
    }
    
    let support = await db.fetch(`supportChannel_${message.channel.id}`);
    if (support) {
        support = await db.fetch(`support_${support}`);
        let supportUser = client.users.get(support.targetID);
        if (!supportUser) return message.channel.delete();
        
        // !complete command
        if (message.content.toLowerCase() === `${prefix}complete`) {
            const complete = new Discord.MessageEmbed()
                .setColor('36393E')
                .setAuthor(`Hey, ${supportUser.tag}`, supportUser.displayAvatarURL)
                .setFooter('Ticket Closed')
                .setDescription('*Your ModMail has been marked as **Complete**. If you wish to reopen this, or create a new one, please send a message to the bot.*');
                
            supportUser.send(complete);
            message.channel.delete()
                .then(console.log(`Support for ${supportUser.tag} has been closed.`))
                .catch(console.error);
            return db.delete(`support_${support.targetID}`);
        }
        const embed = new Discord.MessageEmbed()
            .setColor('36393E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setFooter(`Message Received`)
            .setDescription(message.content);
            
        client.users.get(support.targetID).send(embed);
        message.delete({timeout: 1000});
        embed.setFooter(`Message Sent -- ${supportUser.tag}`).setDescription(message.content);
        return message.channel.send(embed);
    }


  // Variables
  let msg = message.content.toUpperCase();
  let sender = message.author; 
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
 
  // Return Statements
  if (!msg.startsWith(prefix)) return;
 
})
 

client.login(config.token);