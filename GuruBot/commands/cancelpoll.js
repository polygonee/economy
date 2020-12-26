async function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}



module.exports = {
    name: 'cancelpoll',
    description: 'cancels an ongoing poll.',
    execute(message, args, Discord, userCreatedPolls){
        if(userCreatedPolls.has(message.author.id)) {
            message.channel.send('Canceling poll...')
            userCreatedPolls.get(message.author.id).stop();
            userCreatedPolls.delete(message.author.id);
            delay(1000);
            message.channel.send('✅Poll canceled successfully.')
        }
        else {
            message.channel.send("You don't have a poll going on right now. Use `createpoll` to create a poll.");
        }
    }
}