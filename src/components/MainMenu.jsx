import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";

const MainMenu = () => {
  const [name, setName] = useState();
  return (
    <div className="menu">
      <h1 style={{ marginBottom: "3em" }}>Space Game</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Link to="/game">
        <button className="button__start">Start</button>
      </Link>
    </div>
  );
};

export default MainMenu;
