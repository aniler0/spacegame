

export class Player {
    playerX
    playerY
    dead = false
    score = 0
    maxSpeed = 5;
    speedX = 0;
    speedY = 0;
    currentTime

    constructor(gameWidth, gameHeight) {
        this.currentTime = Date.now()
        this.score = 0
        this.playerX = gameWidth / 2
        this.playerY = gameHeight / 2


    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.playerX, this.playerY, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.lineWidth = 0.3;
        ctx.stroke();
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white'
        ctx.fillText(`Spacetime:${this.score}`, 20, 50)
    }

    time = () => {
        (this.score) = Math.floor((Date.now() - this.currentTime) / 1000)

    }
    restart = () => {
        this.dead = false;
    }
    update = () => {
        this.time();
        this.playerX += this.speedX;
        if (this.playerX < 14) this.playerX = 14
        if (this.playerX > 786) this.playerX = 786

        this.playerY += this.speedY;
        if (this.playerY < 14) this.playerY = 14
        if (this.playerY > 386) this.playerY = 386

    }


    stopX = () => {
        this.speedX = 0


    }
    stopY = () => {

        this.speedY = 0

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