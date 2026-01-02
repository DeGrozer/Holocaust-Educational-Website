window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const title = document.querySelector('#title');
const text = title.innerHTML;
title.innerHTML = '';

let i = 0;
setInterval(() => {
  title.innerHTML += text.charAt(i);
  i++;
  if (i > text.length) {
    clearInterval();
  }
}, 100);
