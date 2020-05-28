module.exports = {
    name: 'judgecommands',
    template: '!judgecommands',
    description: 'Describes all commands for The Judge',
    execute(message) {
        const fs = require('fs');
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        let commands = [];

        for(const file of commandFiles) {
            const command = require(`./${file}`);
            commands.push(command.template + ' - ' + command.description);
        }

        message.channel.send('The commands are as follows:\n\n' + commands.join('\n'));
    }
}