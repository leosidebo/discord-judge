module.exports = {
    name: 'judge',
    template: '!judge [subject]',
    description: 'Judge a user',
    execute(message, args) {

        if(args[0] === undefined) {
            return message.reply('The Judge needs someone to judge!');
        } else if(args.length > 1) {
            return message.reply('The Judge cannot judge several people at once!');
        }

        const links = require('../imageLinks.json').links;
        const linkToSend = randomNumber(links.length);

        message.channel.send(args[0] + ', your judgement is:\n' + links[linkToSend]);

        function randomNumber(number) {
            let randomizedNum = Math.floor(Math.random() * number);
            return randomizedNum;
        }
    }
}