module.exports = {
    name: 'judgeinfo',
    template: '!judgeinfo',
    description: 'Information about The Judge',
    execute(message) {
        const Discord = require('discord.js');
        const channel = message.channel;
        const currentTemplate = require('../imageLinks.json').currentTemplate;
        const links = require('../imageLinks.json').templates[currentTemplate];

        const infoEmbed = new Discord.MessageEmbed()
            .setTitle('Info about The Judge')
            .setAuthor('The Judge')
            .addField(
                { name: 'Current template', value: currentTemplate },
                { name: 'Images in template', value: links.length }
            )
            .setTimestamp();
        
        channel.send(infoEmbed);
    }
}