module.exports = {
  name: 'coinflip',
  description: '',
  execute(message, args, Discord){
    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send(message.author + ', your coin landed on heads!');
    }
    else {
      message.channel.send(message.author + ', your coin landed on tails!');
    }
  }
}