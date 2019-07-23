import Paddle from '/src/paddle.js';
import InputHandler from "/src/input.js";
import Ball from "/src/ball.js"
import Brick from "/src/brick.js"

export default class Game {

    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let brick = new Brick(this, {x: 20, y: 20});

        this.gameObjects = [this.ball, this.paddle, brick]
        
        new InputHandler(paddle);
    }

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }

}