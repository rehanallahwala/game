const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const paddleHeight = 100;
const paddleWidth = 10;

const leftPaddle = { x: 0, y: canvas.height / 2 - paddleHeight / 2 };
const rightPaddle = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2 };

let ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 2, dy: 2, radius: 10 };

function drawPaddle(x, y) {
  ctx.beginPath();
  ctx.rect(x, y, paddleWidth, paddleHeight);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function updateBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.dy = -ball.dy;
  }

  if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
    ball.dx = -ball.dx;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle(leftPaddle.x, leftPaddle.y);
  drawPaddle(rightPaddle.x, rightPaddle.y);
  drawBall();
  updateBall();
}

setInterval(draw, 10);
