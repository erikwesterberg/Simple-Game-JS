import Paddle from "/src/paddle";
import InputHandler from "/src/input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// const sizing, 
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
//Clear screen
ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

new InputHandler(paddle)

let lastTime = 0;

const gameLoop = (timestamp) => {
    let deltaTime = timestamp - lastTime
    ctx.clearRect(0, 0, 800, 600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop)

}


gameLoop();

// //give squeare colour
// ctx.fillStyle = "#f00";

// //draw a squeare on page
// ctx.fillRect(20, 20, 100, 100);


// //give squeare colour
// ctx.fillStyle = "#00f";

// //draw a squeare on page
// ctx.fillRect(240, 200, 50, 50);