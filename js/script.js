// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Navbar scroll shadow enhancement
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) { navbar.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(26,82,118,0.15)' : '0 2px 8px rgba(26,82,118,0.08)'; }
});
