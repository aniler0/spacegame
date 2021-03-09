import "./App.css";
import MainMenu from "./components/MainMenu";
import { SCREEN } from "./utils/const";
import GameScreen from "./components/GameScreen";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState(SCREEN.LOBBY);

  return (
    <div className="app">
      {screen == SCREEN.LOBBY ? (
        <MainMenu setScreen={setScreen} />
      ) : screen == SCREEN.GAME_OVER ? (
        <h1 style={{ marginTop: "5em" }}>Öldün</h1>
      ) : (
        <GameScreen setScreen={setScreen} />
      )}
    </div>
  );
}

export default App;
