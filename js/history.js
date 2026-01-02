window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Table of Contents - Dynamic Scrollspy
const toc = document.querySelector('.table-of-contents nav');
const tocLinks = toc ? toc.querySelectorAll('a') : [];

function smoothScroll(target) {
  const navHeight = 100;
  const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

function setActiveLink(activeLink) {
  tocLinks.forEach(link => link.classList.remove('active'));
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Click handler for TOC links
tocLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      smoothScroll(target);
      setActiveLink(link);
    }
  });
});

// Scroll spy - highlight active section
function updateActiveSection() {
  const scrollPos = window.scrollY + 150;
  
  tocLinks.forEach(link => {
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight || 200;
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight + 300) {
        setActiveLink(link);
      }
    }
  });
}

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection);
