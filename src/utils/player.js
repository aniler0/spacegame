export class Player {
    playerX
    playerY

    constructor(gameWidth, gameHeight) {
        this.playerX = gameWidth / 2
        this.playerY = gameHeight / 2
        this.maxSpeed = 5;
        this.speedX = 0;
        this.speedY = 0;
    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.playerX, this.playerY, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.lineWidth = 0.3;
        ctx.stroke();
    }
    update = (deltaTime) => {
        if (!deltaTime) {
            return;
        }

        this.playerX += this.speedX;
        if (this.playerX < 14) this.playerX = 14
        if (this.playerX > 786) this.playerX = 786

        this.playerY += this.speedY;

    }

    moveLeft = () => {
        this.speedX = -this.maxSpeed

    }
    moveRight = () => {
        this.speedX = +this.maxSpeed

    }
    moveUp = () => {
        this.speedY = -this.maxSpeed

    }
    moveDown = () => {
        this.speedY = +this.maxSpeed

    }

}