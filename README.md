# WordleJS

WordleJS is an easy to use class that lets you easily create Wordle games inside of Discord

## Features

- Quick and easy setup for a Wordle game in Discord

## Installation

Install WordleJS

```
npm i @fearlessstudios/wordlejs
```

## Dependencies
| Package Name | Link |
| ------ | ------ |
| DiscordJS | https://discord.js.org/#/ |
| Canvas | https://www.npmjs.com/package/canvas |

## Setup

The steps to get this to work are listed below

##### WordleJS setup

This will create a wordle game in discord and handle all the sending and receiving of messages
 all you have to do is create the game inside the slash command you want
   
```js
const { WordleGame } = require('@fearlessstudios/wordlejs')

const wordleGame = await new WordleGame(interaction, 20).StartGame(); 
```

My current setup looks like this i am currently using a command handler
if you would like to use the same command handler here is the [Tutorial](https://youtu.be/6IgOXmQMT68 "This will take you to the tutorial video") by Fusion Terror
```js
const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
} = require('discord.js');
const { WordleGame } = require('@fearlessstudios/wordlejs')
const { UserData } = require('../../utils/schemas')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wordle')
    .setDescription('Testing the wordle command')
    .addSubcommand((subcmd) =>
      subcmd.setName('play').setDescription('Starts a brand new wordle game')
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const userData = await UserData.findOne({ id: interaction.user.id });
    switch (interaction.options.getSubcommand()) {
      case 'play':
        const wordleGame = await new WordleGame(interaction, 1200).StartGame();
        
        if(wordleGame.isWin == true){
          userData.wordleStats.gamesWon++
          userData.wordleStats.gamesPlayed++
          userData.save()
        }else if(wordleGame.isWin == false){
          userData.wordleStats.gamesLost++
          userData.wordleStats.gamesPlayed++
          userData.save()
        }else if(wordleGame.isWin == undefined && wordleGame.Complete){
          userData.wordleStats.gamesPlayed++
          userData.save()
        }
        break;
    }
  },
};

```