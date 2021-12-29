import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { RouteContext } from "../context/RouteContext";
import { logger } from "../util/logger";

export default () => {
  const { user, changeUser } = useContext(UserContext);
  const { setRoute } = useContext(RouteContext);

  return (
    <div>
      <button
        onClick={() => {
          changeUser("god");
        }}
      >
        Set god
      </button>
      <button
        onClick={() => {
          changeUser("isewat");
        }}
      >
        Set isewat
      </button>
      <p>User: {user}</p>
      <button
        onClick={() => {
          logger.log("Jetzt log ich mal was");
        }}
      >
        Log something
      </button>
      <hr></hr>
      <button
        onClick={() => {
          setRoute(1);
        }}
      >
        Page2
      </button>
    </div>
  );
};
