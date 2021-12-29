import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import { RouteContext, RouteContextProvider } from "./context/RouteContext";
import Test from "./screens/Test";
import Test2 from "./screens/Test2";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        {/* <Test /> */}
        <div style={{ margin: "20px auto" }}>
          <RouteContextProvider>
            <RouteContext.Consumer>
              {({ route }) => {
                return route === 0 ? <Test /> : <Test2 />;
              }}
            </RouteContext.Consumer>
          </RouteContextProvider>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
