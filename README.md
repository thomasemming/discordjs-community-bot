# discordjs-community-bot 🤖

The all-in-one community bot for Discord
NOTE: This bot is work in progress, feel free to take a look but don't expect it to work properly!

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install the packages that are necessary to run the bot, they are declared in the `package.json` and `package-lock.json`.

```bash
npm install
```

## Setup .env file
Create the .env file in the same directory as the `index.js` file. Fill it with the following and add the correct information for yourself:
```bash
CLIENT_TOKEN=''
CLIENT_ID=''
GUILD_ID=''

MEMBER_COUNT_CHANNEL_ID=''
WELCOME_CHANNEL_ID=''

VERIFIED_ROLE_ID=''
MEMBER_ROLE_ID=''
```

## Usage

To initialize the slash commands, run the following command:
```bash
node deploy-commands.js
```

List of commands:
```bash
# Creates an embed verification message in the channel where the command is used
# The user that interacts with the message will be granted the verified role
# NOTE: Only an admin can use this command!
/verification
```

List of events:
1. When a user joins the server, a welcome message will be sent in the welcome channel and the user will also be granted the member role
2. When a banned word is detected, the message will be deleted and the user will receive a direct message
3. Once per hour, the member count channel will be updated with the new member count
