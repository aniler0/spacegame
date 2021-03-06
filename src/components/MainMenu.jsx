import React from "react";
import { SCREEN } from "../utils/const";
import "./MainMenu.css";

const MainMenu = ({ setScreen }) => {
  return (
    <div className="menu">
      <h1>Space Game</h1>
      <button
        className="button"
        onClick={() => {
          setScreen(SCREEN.PLAYING);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default MainMenu;
