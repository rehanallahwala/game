const canvas = document.getElementById("pacman");
const ctx = canvas.getContext("2d");

const pacSize = 30;
const pacSpeed = 2;

const pacMan = {
  x: canvas.width / 2 - pacSize / 2,
  y: canvas.height / 2 - pacSize / 2,
  dx: pacSpeed,
  dy: 0
};

function drawPacMan() {
  ctx.beginPath();
  ctx.arc
