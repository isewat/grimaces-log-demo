export const logger = (function () {
  let enabled = false;
  return {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    },
    log: (input) => {
      if (enabled) {
        console.log(input);
      }
    },
  };
})();
