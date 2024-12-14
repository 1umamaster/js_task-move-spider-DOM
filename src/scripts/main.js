'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    spider.style.top = e.y - wall.offsetTop - spider.clientHeight / 2 + 'px';
    spider.style.left = e.x - wall.offsetLeft - spider.clientWidth / 2 + 'px';
  }
});
