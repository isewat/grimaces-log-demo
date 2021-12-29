import { logger } from "../util/logger";

const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve();
    }, 1000 * seconds);
  });
};

export const getSomething = async () => {
  logger.log("API called");
  await wait(1);
  logger.log("API call succeeded");
  return {
    foo: "bar",
  };
};
