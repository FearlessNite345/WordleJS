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

## Documentation

| Classes    | Params                                                       |
| ---------- | ------------------------------------------------------------ |
| WordleGame | ChatInputCommandInteraction (from Discord.js), WordleOptions |

| Objects    | Values                                  |
| ---------- | --------------------------------------- |
| GameStates | Won, Lost, Timed_out, QuitEarly, Playing |

## Setup

The steps to get this to work are listed below

```js
// Get the WordleGame class from the package
// Get the GameStates object from the package
const { WordleGame, GameStates } = require('@fearlessstudios/wordlejs');

// Define a new wordle game class
// The options param is completely optional its just there for customization
const wordleGame = new WordleGame(interaction);

// To start the game do
await wordleGame.StartGame();
/* This will return GameOverview object 
{
    Status: string, // This returns one of the GameStates
    GuessesTaken: number, // The amount of gusses the user used to get it right
}
*/

// To generate a help embed to send to users for help on this game do
await wordleGame.createHelpEmbed();
// This will return a EmbedBuilder
```

## Support

If you have any issues at all please submit a issue via the github repo
