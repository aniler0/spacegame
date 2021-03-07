

export default class InputHandler {

    constructor(player) {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case 37:

                    player.moveLeft()
                    break;

                case 38:
                    player.moveUp()
                    break;
                case 39:
                    player.moveRight()
                    break;
                case 40:
                    player.moveDown()
                    break;

            }

        })
        document.addEventListener("keyup", e => {
            switch (e.keyCode) {
                case 37:
                    if (player.speedX < 0)
                        player.stopX()
                    break;

                case 38:
                    if (player.speedY < 0)
                        player.stopY()
                    break;
                case 39:
                    if (player.speedX > 0)
                        player.stopX()
                    break;
                case 40:
                    if (player.speedY > 0)
                        player.stopY()
                    break;

            }

        })
    }

}