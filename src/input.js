import Paddle from "./paddle";

export default class InputHandler {

    constructor(paddle) {
        document.addEventListener("keydown", (event) => {
            switch (event.Keycode) {
                case 37:
                paddle.moveLeft();
                break;

                case 39:
                paddle.moveRight();
                break;
            }
        });
    }
}