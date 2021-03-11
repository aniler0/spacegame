import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Enemy from "../utils/enemy";
import InputHandler from "../utils/input";
import { Player } from "../utils/player";
import { getRandomNumber } from "../utils/util";

import "./Screen.css";

const Screen = () => {
  let canvas;
  let ctx;
  let player;
  let enemyCount = 30;
  let enemySpeed;

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 400;

  useEffect(() => {
    player = new Player(GAME_WIDTH, GAME_HEIGHT);
    let enemies = [];

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    player.draw(ctx);
    new InputHandler(player);

    setInterval(() => {
      ctx.clearRect(0, 0, 800, 400);
      if (player.dead) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`You Died! Your score: ${player.score} `, 270, 200);
        return;
      }
      player.draw(ctx);
      player.update();

      const random = getRandomNumber(10, 400);
      const random2 = getRandomNumber(10, 750);

      if (enemies.length < enemyCount) {
        enemies.push(
          new Enemy(
            Math.random() < 0.5
              ? getRandomNumber(random2 + 100, GAME_WIDTH - random)
              : getRandomNumber(50, random2), //WIDTH

            Math.random() < 0.5
              ? getRandomNumber(-random - 10, -100)
              : getRandomNumber(-random - 200, -5),
            //HEIGHT
            (enemySpeed = 5)
          )
        );
      }

      enemies = enemies.filter((enemy) => !enemy.dead);
      enemies.forEach((enemy) => {
        enemy.update(player);
        enemy.draw(ctx);
      });
    }, 1000 / 60);
  });

  return (
    <div className="game__screen">
      <h1>Welcome To The Hyperspace</h1>
      <canvas
        id="myCanvas"
        width="800"
        height="400"
        style={{ border: "1px solid lightgrey", backgroundColor: "black" }}
      ></canvas>
      <Link to="/">
        <button className="button">Play Again</button>
      </Link>
    </div>
  );
};

export default Screen;
