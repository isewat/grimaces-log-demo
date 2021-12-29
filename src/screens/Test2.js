import { useState, useContext } from "react";
import { RouteContext } from "../context/RouteContext";
import { getSomething } from "../api/get-something";

export default () => {
  const { setRoute } = useContext(RouteContext);
  const [data, setData] = useState({});
  const getData = async () => {
    const result = await getSomething();
    setData(result);
  };
  return (
    <div>
      <button
        onClick={() => {
          getData();
        }}
      >
        Make API Call
      </button>
      <p>Data: {JSON.stringify(data)}</p>
      <hr></hr>
      <button
        onClick={() => {
          setRoute(0);
        }}
      >
        Page1
      </button>
    </div>
  );
};
