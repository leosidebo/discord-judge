module.exports = {
    name: 'judge',
    description: 'Judge a user',
    execute(message, args) {
        const links = require('../imageLinks.json').links;
        const linkToSend = randomNumber(links.length)
        const taggedUser = message.mentions.users.first();

        message.channel.send(links[linkToSend]);

        function randomNumber(number) {
            randomizedNum = Math.floor(Math.random() * number);
            return randomizedNum;
        }
    }
}