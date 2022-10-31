// Global level DOM selection
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
const nav = header.querySelector('.nav');
const navToggler = document.querySelector('.nav-toggler');
const heroSection = document.querySelector('.section-hero');

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

// Close header when clicked on nav-link (Visible only in mobile nav)
nav.addEventListener('click', function (e) {
  const el = e.target;

  if (!el.classList.contains('nav-link')) return;

  header.classList.remove('open');
});
