module.exports = {
    name: 'f',
    description: '',
    execute(message, args, Discord){
        if(args && args.length > 1){
            message.channel.send(`${message.author.username} has paid their respect for **${args.join(' ')}** :slight_smile: `)
        }else{
            message.channel.send(`${message.author.username} has paid their respect. :slight_smile: `)
        }
    }
}