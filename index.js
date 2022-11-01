const Canvas = require('canvas')

Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });

module.exports = require('./wordle-game');