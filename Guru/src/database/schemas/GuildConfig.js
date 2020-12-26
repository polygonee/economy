const mongoose = require('mongoose')

const GuildConfigSchema = new mongoose.Schema( {
    guildId: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    }, 
    prefix: {
        type: mongoose.Schema.Types.String,
        required: true,
        default: 'g.',
    },
    defaultRole: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    memberLogChannel: {
        type: mongoose.Schema.Types.String,
        required: false,
    }
} );

module.exports = mongoose.model('GuildConfig', GuildConfigSchema)

