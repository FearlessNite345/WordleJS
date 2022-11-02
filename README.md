# WordleJS

WordleJS is an easy to use class that lets you easily create Wordle games inside of Discord

## Features

- Quick and easy setup for a Wordle game in Discord

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

This will create a wordle game in discord and handle all the sending and receiving of messages
all you have to do is create the game inside the slash command you want

```js
const { WordleGame } = require('@fearlessstudios/wordlejs')

const wordleGame = await new WordleGame(interaction, 20, '!guess').StartGame();
/* WordleGame returns a object which includes
{
  isWin: Boolean, // Tells you if it was a Win or Lose or it will return undefined if the game Timedout
  GuessesTaken: Number, // The amount of gusses the user used to get it right
  Complete: Boolean, // If the game is completed or not
  Timedout: Boolean // If the game timedout for the user not responding in time
}
*/
```