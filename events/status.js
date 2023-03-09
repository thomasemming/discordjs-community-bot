const { ActivityType, Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setActivity('Slash Commands', { type: ActivityType.Listening });
        client.user.setStatus('idle');
	},
};