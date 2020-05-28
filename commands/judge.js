module.exports = {
    name: 'judge',
    description: 'Judge a user',
    execute(message, args) {
        const links = require('../imageLinks.json').links;
        const linkToSend = randomNumber(links.length);

        message.channel.send(args[0] + ', your judgement is:\n' + links[linkToSend]);

        function randomNumber(number) {
            let randomizedNum = Math.floor(Math.random() * number);
            return randomizedNum;
        }
    }
}