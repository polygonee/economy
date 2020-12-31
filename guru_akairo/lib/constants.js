const { prod } = require('mathjs');
const { production } = require('../src/config');

module.exports = {
    color: {
        fatal: 'CC4625',
        error: 'E69539',
        warn: 'E6C72E',
        success: '13CC6A',
        info: '3D90E6'
    },
    poll: {
		1: '1️⃣',
		2: '2️⃣',
		3: '3️⃣',
		4: '4️⃣',
		5: '5️⃣',
		6: '6️⃣',
		7: '7️⃣',
		8: '8️⃣',
		9: '9️⃣',
		10:'🔟'
	},
	emotes: {
        success: !production ? '<a:yesyes:793721186219458560>' : '<a:yesyes:793721186219458560>',
        error: !production ? '<a:nonono:793721053884448798>' : '<a:nonono:793721053884448798>',
        info: !production ? '<:info:793721770372235265>' : '<:info:793721770372235265>',
        np: !production ? '<a:noproblem:793722026761125899>' : '<a:noproblem:793722026761125899>',
	},
	reactions: {
        success: !production ? 'yesyes:793721186219458560' : 'yesyes:793721186219458560',
        error: !production ? 'nonono:793721053884448798' : 'nonono:793721053884448798',
        info: !production ? 'info:793721770372235265' : 'info:793721770372235265'
	},
	clientColor: !production ? 'GOLD' : 'PURPLE',
	logo: !production ? 'https://i.br4d.vip/kkCkZlLP.png' : 'https://i.br4d.vip/Lm9zTuY5.png',
	christmasLogo: !production ? 'https://i.br4d.vip/aZhqll4N.png' : 'https://i.br4d.vip/6DyNZVZn.png',
	id: !production ? '729314273016283167' : '729013058860744814',
	intents: {
		GUILDS: 1 << 0,
		/*
		 * GUILD_CREATE
		 * GUILD_DELETE
		 * GUILD_ROLE_CREATE
		 * GUILD_ROLE_UPDATE
		 * GUILD_ROLE_DELETE
		 * CHANNEL_CREATE
		 * CHANNEL_UPDATE
		 * CHANNEL_DELETE
		 * CHANNEL_PINS_UPDATE
		 */
		GUILD_MEMBERS: 1 << 1,
		/*
		 * GUILD_MEMBER_ADD
		 * GUILD_MEMBER_UPDATE
		 * GUILD_MEMBER_REMOVE
		 */
		GUILD_BANS: 1 << 2,
		/*
		 * GUILD_BAN_ADD
		 * GUILD_BAN_REMOVE
		 */
		GUILD_EMOJIS: 1 << 3,
		/*
		 * GUILD_EMOJIS_UPDATE
		 */
		GUILD_INTEGRATIONS: 1 << 4,
		/*
		 * GUILD_INTEGRATIONS_UPDATE
		 */
		GUILD_WEBHOOKS: 1 << 5,
		/*
		 * WEBHOOKS_UPDATE
		 */
		GUILD_INVITES: 1 << 6,
		/*
		 * INVITE_CREATE
		 * INVITE_DELETE
		 */
		GUILD_VOICE_STATES: 1 << 7,
		/*
		 * VOICE_STATE_UPDATE
		 */
		GUILD_PRESENCES: 1 << 8,
		/*
		 * PRESENCE_UPDATE
		 */
		GUILD_MESSAGES: 1 << 9,
		/*
		 * MESSAGE_CREATE
		 * MESSAGE_UPDATE
		 * MESSAGE_DELETE
		 */
		GUILD_MESSAGE_REACTIONS: 1 << 10,
		/*
		 * MESSAGE_REACTION_ADD
		 * MESSAGE_REACTION_REMOVE
		 * MESSAGE_REACTION_REMOVE_ALL
		 * MESSAGE_REACTION_REMOVE_EMOJI
		 */
		GUILD_MESSAGE_TYPING: 1 << 11,
		/*
		 * TYPING_START
		 */
		DIRECT_MESSAGES: 1 << 12,
		/*
		 * CHANNEL_CREATE
		 * MESSAGE_CREATE
		 * MESSAGE_UPDATE
		 * MESSAGE_DELETE
		 */
		DIRECT_MESSAGE_REACTIONS: 1 << 13,
		/*
		 * MESSAGE_REACTION_ADD
		 * MESSAGE_REACTION_REMOVE
		 * MESSAGE_REACTION_REMOVE_ALL
		 * MESSAGE_REACTION_REMOVE_EMOJI
		 */
		DIRECT_MESSAGE_TYPING: 1 << 14
		/*
		 * TYPING_START
		 */
	},
	badges: {
		'DISCORD_EMPLOYEE': '<:discord_staff:793725213204152351>',
		'PARTNERED_SERVER_OWNER': '<:partner:793725520914415616>',
		'HYPESQUAD_EVENTS': '<:hype_events:793725740772229150>',
		'BUGHUNTER_LEVEL_1': '<:bug_1:793725997924614186>',
		'HOUSE_BRAVERY': '<:brave:793726166527115315>',
		'HOUSE_BRILLIANCE': '<:brilliance:793726328523849729>',
		'HOUSE_BALANCE': '<:balance:793726530081521675>',
		'EARLY_SUPPORTER': '<:early:793726685044277320>',
		'BUGHUNTER_LEVEL_2': '<:bug_2:793727845133975592>',
		'EARLY_VERIFIED_DEVELOPER': '<:botdev:793728253541613629>',
		'NITRO': '<:nitro:793728420060201020>'
	},
	OwOfy: [
		'(*^ω^)',
		'(◕‿◕✿)',
		'(◕ᴥ◕)',
		'ʕ•ᴥ•ʔ',
		'ʕ￫ᴥ￩ʔ',
		'(*^.^*)',
		'owo',
		'(｡♥‿♥｡)',
		'uwu',
		'(*￣з￣)',
		'>w<',
		'^w^',
		'(つ✧ω✧)つ',
		'(/ =ω=)/',
		'>~<'
	]
};