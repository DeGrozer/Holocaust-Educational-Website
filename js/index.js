window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


//for the counter

const counters = document.querySelectorAll('.value');
const speed = 3000; // slower speed

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target').replace(/,/g, '');
  let count = 0;
  const minIncrement = (target / (speed / 500)) / 40;

  const options = {
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animate = () => {
          const increment = Math.max((target - count) / (speed / 60), minIncrement);
          count += increment;
          if (count >= target) {
            counter.innerText = Intl.NumberFormat().format(target);
            return;
          }
          counter.innerText = Intl.NumberFormat().format(Math.floor(count));
          requestAnimationFrame(animate);
        };
        animate();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(counter);
});


//fade in fade out

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkFadeIn() {
  var firstpar = document.getElementById("firstpar");
  var headline = document.querySelector(".headline");
  var date = document.querySelector(".date");
  var about = document.querySelector(".about");

  if (isElementInViewport(firstpar)) {
    firstpar.classList.add("fade-in");
  }

  if (isElementInViewport(headline)) {
    headline.classList.add("fade-in");
  }

  if (isElementInViewport(date)) {
    date.classList.add("fade-in");
  }

  if (isElementInViewport(about)) {
    about.classList.add("fade-in");
  }
}

window.addEventListener("scroll", checkFadeIn);
window.addEventListener("load", checkFadeIn);
