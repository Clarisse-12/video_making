const ball = document.getElementById('ball');
const kickBtn = document.getElementById('kickBtn');
const frictionToggle = document.getElementById('frictionToggle');

let position = 30;
let speed = 0;
let moving = false;

kickBtn.addEventListener('click', () => {
  if (!moving) {
    speed = 8;
    moving = true;
    animateBall();
  }
});

function animateBall() {
  if (!moving) return;

  position += speed;
  ball.style.left = position + 'px';

  
  if (frictionToggle.checked) {
    speed *= 0.95; 
  }

  
  if (position > window.innerWidth - 100 || speed < 0.1) {
    moving = false;
    speed = 0;
  } else {
    requestAnimationFrame(animateBall);
  }
}
