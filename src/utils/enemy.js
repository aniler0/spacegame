import { Player } from "./player"
import { getRandomNumber } from "./util"

export default class Enemy {
    enemySpeed = 3
    dead = false
    dirX
    dirY
    radius

    constructor(enemyX, enemyY) {
        this.dirX = enemyX
        this.dirY = enemyY
        this.radius = getRandomNumber(5, 15)
    }
    remove = () => {
        if (this.dirY > 414)
            return true;
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
        if (this.dead) return;
        this.dirY += this.enemySpeed
        if (this.remove() && !this.dead) {
            this.dead = true;

        }

    }
}