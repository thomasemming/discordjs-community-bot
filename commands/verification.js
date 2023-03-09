const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verification')
        .setDescription('Creates a verification message.'),
    async execute(interaction) {

        const embed = {
            title: `Rules & Verification`,
            description: `*Welcome to ${interaction.guild.name}*`,
            color: 0xFFFFFF,
            fields: [
                {
                    name: `\u200B`,
                    value: `**1. Respect other users**\n Treat all members of the server with kindness and respect. Any form of discrimination or harassment will not be tolerated.\n\n**2. Keep it clean**\n No NSFW content or excessive profanity is allowed on this server.\n\n**3. No spamming**\n Please refrain from spamming messages or posting irrelevant content in the chat.\n\n**4. Follow Discord TOS**\n All activity on this server must comply with Discord's terms of service.\n\n**5. No advertising**\n Do not promote any external services or products without permission from the server moderators.\n\nFailure to comply with these rules may result in a warning or even a ban from the server. *The moderators reserve the right to take appropriate action as needed to maintain a positive and welcoming community.*\n\nWhen clicking the button below, you acknowledge and agree to these guidelines and gain access to the server. Enjoy your stay!`,
                    inline: false,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: `${interaction.guild.name}`,
                icon_url: `${interaction.guild.iconURL()}`,
            },
        };        

        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('verification')
					.setLabel('Accept')
					.setStyle(ButtonStyle.Success)
                    .setEmoji('✅'),
			);

        // only an admin can use this command
        if (interaction.member.permissions.has('ADMINISTRATOR')) {
            await interaction.channel.send({ embeds: [embed], components: [row] });
            await interaction.reply({ content: `Message sended`, ephemeral: true });
        } else {
            interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }
    },
};