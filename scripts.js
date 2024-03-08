const canvas = document.getElementById('pingPongCanvas');
const context = canvas.getContext('2d');

const paddleWidth = 10, paddleHeight = 100;
let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 4;

let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSpeedX = 5, ballSpeedY = 5;
const ballSize = 10;

function draw() {
    // 清除画布
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制球拍
    context.fillStyle = 'white';
    context.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    context.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

    // 绘制球
    context.beginPath();
    context.arc(ballX, ballY, ballSize, 0, Math.PI*2, true);
    context.fill();

    // 更新球的位置
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // 碰撞检测
    if (ballY <= 0 || ballY >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX <= paddleWidth) {
        if (ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            resetBall();
        }
    }

    if (ballX >= canvas.width - paddleWidth) {
        if (ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            resetBall();
        }
    }

    // AI移动
    if (rightPaddleY + paddleHeight / 2 < ballY) {
        rightPaddleY += paddleSpeed;
    } else {
        rightPaddleY -= paddleSpeed;
    }
}

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
    ballSpeedY = 5;
}

setInterval(draw, 1000 / 60); // 每秒更新60次
