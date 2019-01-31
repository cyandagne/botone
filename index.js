//const Discord = require('discord.js');

const commando = require('discord.js-commando');

const bot = new commando.Client(
    {
        commandPrefix: '--',
        owner: 'Misa#2256',
        disableEveryone: true,
        unknownCommandResponse: false,
    }
);

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('stickers', 'Stickers');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.login('token');
