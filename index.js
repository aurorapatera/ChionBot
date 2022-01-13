// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const smutWord = ["buttplug", "dildo", "titties", "titty", "pit", "porn", "dong",
    "hand holding", "peen", "boob", "dick", "salami", "wizard tower",
    "Biggus Dickus", "bite me", "eggplant", "peepee", "sword of the frontier",
    "vlaakith", "shar preserve me", "horny", "Haedir"]
client.on('messageCreate', (message) => {
  if (message.author.bot) return false;

  smutWord.forEach((word) => {
    if (message.content.includes(word)) {
      message.reply(':pit:831859849343401998');
    }
  });
});
// Login to Discord with your client's token
client.login(process.env.token);
