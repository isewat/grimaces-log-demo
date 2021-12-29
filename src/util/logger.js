export const logger = (function () {
  let godMode = false;
  return {
    setGodMode: (mode) => {
      godMode = mode;
    },
    log: (input) => {
      if (godMode) {
        console.log(input);
      }
    },
  };
})();
