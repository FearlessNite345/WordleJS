/**
 * 
 * @param {Number} time 
 * @returns 
 */
function Delay(time) {
  var ms = time * 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 
 * @param {Number} number 
 * @returns 
 */
function FormatNumber(number) {
  var f = new Intl.NumberFormat("en-US", {});

  return f.format(number);
}

module.exports = {
  Delay: Delay,
  FormatNumber: FormatNumber
};
