console.log('hey');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Connected as ${client.user.tag}`);
});

client.on('message', msg => {
	if(msg.author.bot) return;

	msg.reply('heyyyyyy !');
});

client.login('ODAyOTUxOTgxNDU0ODUyMTA4.YA2tTg.06TIIH3y0qVzL25eCKyEhBO0KMY');

console.log('hey 2');