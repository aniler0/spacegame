import { getRandomNumber } from "./util"

export default class Enemy {
    enemySpeed = 3
    dirX
    dirY
    radius

    constructor(enemyX, enemyY) {
        this.dirX = enemyX
        this.dirY = enemyY
        this.radius = getRandomNumber(5, 15)
    }

    remove = (enemy) => {
        if (this.dirY > 400) {

        }
    }


    draw = (ctx) => {


        ctx.beginPath();
        ctx.arc(this.dirX, this.dirY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 0.3;
        ctx.stroke();
    }
    update = () => {


        this.dirY += this.enemySpeed

    }
}