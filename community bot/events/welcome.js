require('dotenv').config();
const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    execute(member) {
        const role = member.guild.roles.cache.get(process.env.MEMBER_ROLE_ID);
        member.roles.add(role);

        const channel = member.guild.channels.cache.get(process.env.WELCOME_CHANNEL_ID);
        if (!channel) return console.error(`Channel with ID ${process.env.WELCOME_CHANNEL_ID} not found`);

        const embed = {
            description: `**Welcome to the server** ${member} 👋`,
            color: 0xFFFFFF,
            timestamp: new Date(),
            footer: {
                text: member.guild.name,
                icon_url: member.guild.iconURL({ dynamic: true }),
            },
        };  

        channel.send({ embeds: [embed] });

        
    },
};