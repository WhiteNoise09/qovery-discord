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

console.log(process.env.DISCORD_CLIENT_TOKEN);

client.login(process.env.DISCORD_CLIENT_TOKEN);

console.log('hey 2');