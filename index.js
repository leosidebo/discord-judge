const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready');
});

client.login(token);

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'judge') {
        client.commands.get('judge').execute(message, args);
    } else if (command === 'judgecommands') {
        client.commands.get('judgecommands').execute(message);
    } else if (command === 'judgetemplate') {
        client.commands.get('judgetemplate').execute(message, args);
    }
})