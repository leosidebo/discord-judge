module.exports = {
    name: 'judgetemplate',
    template: 'judgetemplate [template]',
    description: 'Choose one of the image templates for The Judge',
    execute(message, args) {
        const templates = require('../imageLinks.json').templates;
        const fs = require('fs');
        
        if(args[0] === undefined) {
            return message.reply('A template needs to be provided!');
        } else if(args.length > 1) {
            return message.reply('Only one template at once!');
        }

        if(templates.hasOwnProperty(args[0])) {
            let templateFile = JSON.parse(fs.readFileSync('./imageLinks.json').toString());
            templateFile.currentTemplate = args[0];
            fs.writeFile('./imageLinks.json', JSON.stringify(templateFile, null, 2), err => {
                if(err) console.error(err);
            });
            return message.channel.send(`The image template is now: ${args[0]}`);
        } else {
            return message.channel.send('The Judge has no such template.');
        }
    }
}