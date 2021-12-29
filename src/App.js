import logo from "./logo.svg";
import "./App.css";
import { UserContext, UserContextProvider } from "./context/UserContext";
import Test from "./screens/Test";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <div style={{ margin: "20px auto" }}>
          <Test />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
