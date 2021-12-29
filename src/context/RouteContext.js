import { createContext, useState } from "react";

export const RouteContext = createContext();

export const RouteContextProvider = ({ children }) => {
  const [route, setRoute] = useState(0);
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};
