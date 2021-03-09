import React, { useEffect, useState } from "react";
import { SCREEN } from "../utils/const";
import Enemy from "../utils/enemy";
import InputHandler from "../utils/input";
import { Player } from "../utils/player";
import { getRandomNumber } from "../utils/util";
import "./Screen.css";

const Screen = ({ setScreen }) => {
  let canvas;
  let ctx;
  let player;
  let enemyCount = 35;

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
        setScreen(SCREEN.GAME_OVER);
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
              ? getRandomNumber(random2, GAME_WIDTH - random)
              : getRandomNumber(0, random2), //WIDTH

            Math.random() < 0.5
              ? getRandomNumber(-random - 10, -100)
              : getRandomNumber(-random - 200, -5) //HEIGHT
          )
        );
      }

      enemies = enemies.filter((enemy) => !enemy.dead);
      enemies.forEach((enemy) => {
        enemy.update(player);
        enemy.draw(ctx);
      });
    }, 1000 / 60);
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
    </div>
  );
};

export default Screen;
