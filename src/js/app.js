import sayHello from './lib/sayHello';
import Mouse from './mouse';
import Ball from './ball';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const position = new Mouse(canvas);
const mouseBall = new Ball(position.x, position.y, 30);
const balls = [];

for (let i = 0; i < 1000; i++) {
  balls.push(
    new Ball(
      Math.random() * 600,
      Math.random() * 600,
    )
  )
};

const render = () => {
  window.requestAnimationFrame(render);
  ctx.clearRect(0, 0, 600, 600);
  mouseBall.setPosition(position.x, position.y)
  mouseBall.draw(ctx)

  balls.forEach( ball => {
    ball.think(position, mouseBall.radius)
    ball.draw(ctx)
  })
};

render();
sayHello();