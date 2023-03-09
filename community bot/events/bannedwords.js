const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    execute(message) {
        const bannedWords = ['bannedword1', 'bannedword2', 'bannedword3'];
        if (bannedWords.some(word => message.content.toLowerCase().includes(word)) && !message.author.bot) {
            try {
                message.delete();
                message.author.send(`Your message *"${message.content}"* was deleted because it contained a banned word.`);
            } catch (error) {
                console.error(error);
            }
        }
    },
};