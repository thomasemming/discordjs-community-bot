# discordjs-community-bot

The all-in-one comminuty bot for Discord

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

List of commands:
```bash
# Creates an embed verification message in the welcome channel
# The user that interacts with the message will be ranted the verified role
# NOTE: Only an admin can use this command!
/verification
```

List of events:
* When a user joins the server, a welcome message will be sent in the welcome channel and the user will also be granted the member role
* When a banned word is detected, the message will be deleted and the user will receive a direct message
* Once per hour, the member count channel will be updated with the new member count
