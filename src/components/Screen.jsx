import React, { useEffect, useState } from "react";
import InputHandler from "../utils/input";
import { Player } from "../utils/player";
import "./Screen.css";

const Screen = () => {
  const [round, setRound] = useState(0);

  let canvas;
  let ctx;
  let player;
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 400;

  useEffect(() => {
    player = new Player(GAME_WIDTH, GAME_HEIGHT);
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    player.draw(ctx);
    new InputHandler(player);
    let lastTime = 0;
    let gameLoop = (timestamp) => {
      let deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      ctx.clearRect(0, 0, 800, 400);
      player.update(deltaTime);
      player.draw(ctx);

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    setInterval(() => {}, 1000 / 30);
  }, []);

  return (
    <div className="game__screen">
      <h1>Space Game</h1>
      <canvas
        id="myCanvas"
        width="800"
        height="400"
        style={{ border: "1px solid lightgrey", backgroundColor: "black" }}
      ></canvas>
      <h3>Round: {round}</h3>
    </div>
  );
};

export default Screen;
