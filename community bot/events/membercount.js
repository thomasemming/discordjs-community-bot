require('dotenv').config();
const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        setInterval(() => {
            const channel = client.channels.cache.get(process.env.MEMBER_COUNT_CHANNEL_ID);
            channel.setName(`Total Members: ${client.guilds.cache.first().memberCount.toLocaleString()}`);
        }, 3600000);
    },
};