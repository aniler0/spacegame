import React, { useEffect, useState } from "react";
import Enemy from "../utils/enemy";
import InputHandler from "../utils/input";
import { Player } from "../utils/player";
import { getRandomNumber } from "../utils/util";
import "./Screen.css";

const Screen = () => {
  const [round, setRound] = useState(1);

  let canvas;
  let ctx;
  let player;
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 400;

  useEffect(() => {
    player = new Player(GAME_WIDTH, GAME_HEIGHT);
    const enemies = [];
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    player.draw(ctx);
    new InputHandler(player);

    setInterval(() => {
      ctx.clearRect(0, 0, 800, 400);

      player.draw(ctx);
      player.update();

      const random = getRandomNumber(10, 100);

      if (enemies.length < round) {
        enemies.push(
          new Enemy(
            getRandomNumber(10, GAME_WIDTH - 14), //WIDTH

            Math.random() < 0.5
              ? getRandomNumber(-random - 10, -100)
              : getRandomNumber(-random - 200, -5) //HEIGHT
          )
        );
      }

      enemies.forEach((enemy) => {
        enemy.update();
        enemy.draw(ctx);
      });
    }, 1000 / 60);
  });

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
