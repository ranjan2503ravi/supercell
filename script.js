const body = document.querySelector('body');
const cursor = document.querySelector('.cursor');

body.addEventListener('mousemove', (event) => {
  cursor.style.top = `${event.y + 10}px`;
  cursor.style.left = `${event.x + 10}px`;
});
