const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const mongoose = require('mongoose');
const customisation = require('./customisation.json');
const superagent = require('superagent');
const prefix = 'wh.';
const ms = require('ms');
const copypastas = require('./copypastas.json');
const async = require('async.js');
const fights = require('./fights.json')
client.on('ready', () => {
	console.log('Whis is online!');
  });

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	const guild = message.guild


	if (command === '8ball' || command === '8b') {
		client.commands.get('8ball').execute(message, args, Discord);
	} else if (command === 'addrole' || command === 'adrl') {
		client.commands.get('addrole').execute(message, args, Discord, settings, client);
	} else if (command === 'avatar' || command === 'av') {
		client.commands.get('avatar').execute(message, args, Discord)
	} else if (command === 'ban' || command === 'bigoof') {
		client.commands.get('ban').execute(message, args, Discord, settings, customisation, client)
	} else if (command === 'blacklist' || command === 'black'){
		client.commands.get('blacklist').execute(message, args, Discord, settings, fs, customisation, client)
	} else if (command === 'bug' || command === 'error'){
		client.commands.get('bug').execute(message, args, Discord, customisation, client)
	} else if (command === 'clearwarns' || command === 'clrwrns'){
		client.commands.get('clearwarns').execute(message, args, client, ms, fs, customisation, Discord)
	} else if (command === 'coinflip' || command === 'coin'){
		client.commands.get('coinflip').execute(message, args, Discord)
	} else if (command === 'copypasta' || command === 'pasta'){
		client.commands.get('copypasta').execute(message, args, Discord, copypastas)
	} else if (command === 'ctrl'){
		client.commands.get('ctrl').execute(message, args, Discord, guild)
	}else if (command === 'dadjoke' || command === 'djoke'){
		client.commands.get('dadjoke').execute(message, args, Discord)
	} else if (command === 'f' || command === 'respect'){
		client.commands.get('f').execute(message, args, Discord, client)
	} else if (command === 'fight' || command === 'challenge'){
		client.commands.get('fight').execute(message, args, settings, fights)
	} else if (command === 'hammer' || command === 'thor-style'){
		client.commands.get('hammer').execute(message, args, settings, client)
	} else if (command === 'kick' || command === 'oof'){
		client.commands.get('kick').execute(client, message, args, Discord, customisation, settings)
	}
});

//client command elevation(permLevel)
/*
client.elevation = message => {
  if (message.channel.type === 'dm') return;
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 3;
  if (message.member.id === message.guild.ownerID) permlvl = 4;
  if (message.author.id === settings.ownerid) permlvl = 5;
  return permlvl;
};
*/

//ping log 
//var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
//client.on('debug', e => {
//  console.log(e.replace(regToken, 'that was redacted'));
//});

client.login(settings.token);
