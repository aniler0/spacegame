import "./App.css";
import MainMenu from "./components/MainMenu";
import { SCREEN } from "./utils/const";
import Screen from "./components/Screen";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState(SCREEN.LOBBY);

  return (
    <div className="app">
      {screen == SCREEN.LOBBY ? <MainMenu setScreen={setScreen} /> : <Screen />}
    </div>
  );
}

export default App;
