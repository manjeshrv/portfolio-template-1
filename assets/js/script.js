// Global level DOM selection
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
const navToggler = document.querySelector('.nav-toggler');
const heroSection = document.querySelector('.hero-section');

// Fixed header functionality
const fixedNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add('fixed');
  if (entry.isIntersecting) header.classList.remove('fixed');
};

const fixedNavOpt = {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
};

const heroObserver = new IntersectionObserver(fixedNav, fixedNavOpt);

heroObserver.observe(heroSection);

// Toggle haeder functionality
navToggler.addEventListener('click', function () {
  header.classList.toggle('open');
});

// INIT AOS animation (on scroll reveal animation)
// To learn about AOS visit https://github.com/michalsnik/aos
AOS.init({ duration: 2000, once: true });