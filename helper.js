function Delay(time) {
  var ms = time * 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Delay = Delay;
