import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/game" component={GameScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
