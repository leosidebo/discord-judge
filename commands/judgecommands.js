module.exports = {
    name: 'judgecommands',
    description: 'Describes all commands for The Judge',
    execute(message) {
        const fs = require('fs');
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        console.log(commandFiles);
        let commands = [];

        for(const file of commandFiles) {
            const command = require(`./${file}`);
            commands.push('!' + command.name + ' - ' + command.description);
        }

        message.channel.send(commands.join('\n'));
    }
}