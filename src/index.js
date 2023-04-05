const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN,{polling: true})

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "👋 Hello! This is CanaMerchant Bot by Canadia Bank."+"\n"+
    "Please enter the 4 digits code given in the previous screen and send.");
    });

    bot.onText(/\/showmyid/, (msg) => {
        bot.sendMessage(msg.chat.id, `Your Telegram Group ID: \`${msg.chat.id}\``);
        });

        bot.on("message",(msg)=>{
            if(msg.text.toString().toLowerCase() == "0000")
            bot.sendMessage(msg.chat.id, `Your Telegram Group ID: \`${msg.chat.id}\``);
        });
        