export default class Ball {

    constructor(game) {

        this.image = document.getElementsByClassName("img_ball");

        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight

        this.game = game;

        this.position = {x: 10, y: 10}
        this.speed = {x: 4, y: 2};
        this.size = 16;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

    }


    update(deltaTime) {
        console.log(this.game.paddle.position.x);
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // wall left adn right on screen
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed
        }
        // wall top or bottom
        if(this.position.y + this.size > this.gameWidth || this.position.y < 0) {
            this.speed.y = -this.speed
        }
        // collision wiht paddle
        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        let letSideOfPaddle = this.game.paddle.position.x;
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.width;
        
        if (bottomOfBall >= topOfPaddle &&
            this.position.x >= leftSideOfPaddle &&
            this.position.x + this.size <= rightSideOfPaddle
        
            ) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}

