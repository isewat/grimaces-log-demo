import { createContext, useState } from "react";
import { logger } from "../util/logger";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const changeUser = (newUser) => {
    if (newUser === "god") {
      logger.enable();
    } else {
      logger.disable();
    }
    setUser(newUser);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
