const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Connected as ${client.user.tag}`);
});

client.on('message', msg => {
	if(msg.author.bot) return;

	msg.reply('heyyyyyy !');
});

client.login(process.env.TOKEN);