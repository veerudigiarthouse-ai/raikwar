// Fade-in on scroll
const elements = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible', 'fade-in');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
