const {Telegraf} = require('telegraf')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

story = ""
const Commands = require('./handlers/Commands')

const bot = new Telegraf(process.env.BOT_API_TOKEN);

bot.command('/start', Commands.StartHandler)
// bot.command('/add', (ctx) => story)
bot.launch();
