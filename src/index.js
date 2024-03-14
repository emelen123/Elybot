const telegramBot = require('node-telegram-bot-api');

const TOKEN = '7129363664:AAHQAvYzKBjt9jdvO9FDIEvYZnDzv2caZ9c';

const bot = new telegramBot(TOKEN, {polling: true});

bot.on('message', (message) => {
    console.log(message);

    let chat_Id =  message.from.id;
    bot.sendMessage(chat_Id, 'Hello Elybot');
})
