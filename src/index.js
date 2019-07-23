import Paddle from '/src/paddle.js';
import InputHandler from "/src/input.js";
import Ball from "/src/ball.js"

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball();
new InputHandler(paddle);

let lastTime = 0;

// images

let imgBall = document.getElementById("img_ball");

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  paddle.update(deltaTime);
  paddle.draw(ctx);
  ball.update(deltaTime) 
  ball.draw(ctx)

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);




