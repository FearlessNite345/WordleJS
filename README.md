# WordleJS

WordleJS is an easy to use class that lets you easily create Wordle games inside of Discord

## Features

- Quick and easy setup for a Wordle game in Discord
- Easy customization
- Easy way to create a custom embed for how to play the game

## Installation

Install WordleJS

```sh
npm i @fearlessstudios/wordlejs
```

## Dependencies

| Package Name | Link                                 |
| ------------ | ------------------------------------ |
| DiscordJS    | https://discord.js.org               |
| Canvas       | https://www.npmjs.com/package/canvas |

## Setup

The steps to get this to work are listed below

##### WordleJS setup

```js
// Get the WordleGame class from the package
const { WordleGame } = require('@fearlessstudios/wordlejs')

// Define a new wordle game class
const wordleGame = new WordleGame(interaction, 20, '!guess');

// To start the game do
await wordleGame.StartGame(interaction, 20, '!guess') 
// This will return a javascript object

// To generate a help embed to send to users for help on this game do
await wordleGame.createHelpEmbed() 
// This will return a EmbedBuilder
```

## Support
If you have any issues at all please submit a issue via the github repo