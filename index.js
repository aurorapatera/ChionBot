// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('I am awake, mother!');
});

const smutWord = ["buttplug", "dildo", "titties", "titty", "pit", "porn", "dong",
    "hand holding", "peen", "boob", "dick", "salami", "wizard tower",
    "Biggus Dickus", "bite me", "eggplant", "peepee", "sword of the frontier",
    "vlaakith", "shar preserve me", "horny", "Haedir"]
client.on('messageCreate', (message) => {
  if (message.author.bot) return false;

  smutWord.forEach((word) => {
    if (message.content.includes(word)) {
      message.react('<:pit:831859849343401998>');
    }
  });
});

//Question of the Day
const cron = require('cron');
const question = ["Are there any words or phrases that they overuse?",
"Do they have a catchphrase?",
"Are they a glass-half-full or a glass-half-empty type of person?",
"Are they more introverted or extroverted?",
"What makes them laugh?",
"What is their love language? How do they show affection?",
"Do they have any mental disabilities?",
"What do they want others to think about them?",
"How do they see themselves?",
"What is their strongest aspect?",
"What is their weakest aspect?",
"How competitive are they?",
"Do they act on impulse or carefully think through decisions?",
"What happens if someone praises their work?",
"What happens if someone criticises their work?",
"What is their greatest fear?",
"What is their biggest secret that they’ve never told anyone?",
"What is the purpose of life?",
"When did they last cry?",
"What haunts them?",
"What are their political views?",
"What will they stand for?",
"Who do they quote most often?",
"Do they prefer the indoors or the outdoors?",
"What is their guilty pleasure?",
"What personal trait do they rely on the most?",
"What do they value most in a friend?",
"If they could change one thing about themself, what would it be?",
"What are they obsessed with?",
"What are their pet peeves?",
"What is their greatest regret?",
"Do they have a large family? Who are they?",
"What do they think of their family?",
"What is their current relationship with their parents?",
"Do they have siblings? Where do they come in?",
"Describe their best friend.",
"Who is their ideal best friend?",
"Who are their other friends?",
"Do they make friends easily?",
"Do they have any pets?",
"Who do they naturally get along with?",
"Who do they surprisingly get along with?",
"Do they believe in love at first sight?",
"Are they in a relationship?",
"How do they act in a relationship?",
"How many relationships have they had?",
"When was the last time they engaged in intimacy?",
"What kind of sex do they like to have?",
"How would they feel after a one-night stand?",
"How do they break up with someone?",
"Have they ever been in love?",
"Has anyone ever broken their heart?",
"Who do they trust?",
"Do they live with anyone? How do they get along with them?",
"Do they get along with their neighbours? Why?",
"How would their family describe them?",
"How would their lover describe them?",
"How would their boss describe them?",
"How would their enemy describe them?",
"What were they like as a baby/child?",
"Did they grow up rich or poor?",
"Were they nurtured or neglected in childhood?",
"What is the most offensive thing a person has ever said to them?",
"What has been their greatest achievement?",
"How was their first kiss?",
"What is the worst thing they did to someone they love?",
"What is their greatest ambition?",
"What advice would they give their theynger self?",
"What smells remind them of home/their childhood?",
"What did they want to be when they grow up? Did it work out?",
"What is their favourite childhood memory?",
"What is their worst childhood memory?",
"Did they have any imaginary friends as a child?",
"What are they most ashamed of?",
"What are they most proud of?",
"Has anyone saved their life?",
"Were they ever bullied as a child?",
"What is the most embarrassing thing to ever happen to them?",
"What are their values?",
"What is the worst thing that can be done to a person?",
"What is freedom?",
"When did they last lie?",
"What is their view of lying?",
"Do they keep their promises?",
"Who is their hero?",
"If they could save one person, who would it be?",
"If they could ask for help from one person, who would it be?",
"What is their favourite proverb?",
"Do they believe in happy endings?",
"What is happiness?",
"What is their dream job?",
"What do they like to spend money on?",
"What is something they would never do?",
"What is something they would do that might surprise people?",
"Are they a leader, follower, or lone wolf?",
"Would they trade ten years of their life for money/beauty/intelligence?",
"How do they respond to a threat?",
"Do they prefer fighting with their fists or using diplomacy?",
"What is their kryptonite?",
"Their house is burning down, and they can only save one thing. What is it?",
"How do they view strangers?",
"What do they love to hate?",
"What are their phobias?",
"What is their ideal weapon?",
"Who do they most despise in the world?",
"What do they do when they get angry?",
"Who are their enemies? Why?",
"they witness a victimless crime, what do they do?",
"they’re at a bar, and someone spills their drink, what do they do?",
"Are they a forgiving person?",
"Is there anything in their past that they can’t forgive?",
"What are their bad habits?",
"What is their job?",
"What do they think about their job?",
"What other jobs have they had?",
"What are their hobbies?",
"What is their educational background?",
"Would they describe themselves as intelligent?",
"Do they have any specialist training?",
"Are they ‘naturally talented’ at anything?",
"Do/have they played a sport?",
"What is their socioeconomic position?",
"What is in their fridge?",
"What is in their car?",
"What kind of car do they drive?",
"What is in their pocket?",
"What is their most treasured possession?",
"Do they keep anything under their pillow? Next to their bed?",
"What are their eating habits?",
"Do they have any allergies?",
"What does their home look like?",
"Minimalist or hoarder?",
"Are they organised or disorganised?",
"Are they forgetful or easily distracted?",
"Right brain or left brain?",
"What do they do first on the weekend?",
"What do they do first on a weekday?",
"What do they do on a Sunday afternoon?",
"What do they do on a Friday night?",
"Are they comfortable with technology?",
"How do they like to celebrate their birthday?",
"What do they think about when they can’t sleep?",
"What keeps them up at night?",
"What is their morning routine?",
"If they could relive any day of their life, what would it be?",
"What is their favourite colour?",
"What is their favourite animal?",
"What place would they like to visit the most?",
"What is the most beautiful thing they have ever seen?",
"What is their favourite song?",
"What type of art do they prefer? (fine art, music, reading, film, etc.)",
"What is their password?",
"What is their favourite food?",
"What is their favourite movie?",
"What TV show can they just binge all day long?",
"Who is their favourite musician?",
"What is their favourite alcoholic drink?",
"What is their favourite non-alcoholic drink?",
"If they could have a superpower, what would it be?",
"What would they dress up for on Halloween?",
"What would they do if they won the lottery?",
"If they could meet anyone, living or dead, who would it be?",
"Do they have any food allergies or sensitivities?",
]
//Astarion

let scheduledMessage = new cron.CronJob('30 23 * * *', () => {
      // This runs every day at 10:30:00, you can do anything you want
      // Specifing your guild (server) and your channel
         const guild = client.guilds.cache.get('766962323037749248');
         const channel = guild.channels.cache.get('766962514407718932');
				 const QoTDAstarion = Math.floor(Math.QoTDAstarion() * question.length);
         channel.send('QoTDAstarion');
        });

        // When you want to start it, use:
        scheduledMessage.start()
    ;



// Login to Discord with your client's token
client.login(process.env.token);
