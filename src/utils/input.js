

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
    }

}