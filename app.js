// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList){
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth-scroll accounting for sticky header
const header = document.querySelector('.site-header');
document.querySelectorAll('.nav-list a').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id?.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0) - 6;
    window.scrollTo({ top: y, behavior: 'smooth' });
    navList?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Scroll spy (active link highlight)
const links = Array.from(document.querySelectorAll('.nav-list a'));
const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

function onScroll(){
  const pos = window.scrollY + (header?.offsetHeight ?? 0) + 60;
  let active = null;
  for (const sec of sections){
    if (sec.offsetTop <= pos && (sec.offsetTop + sec.offsetHeight) > pos){
      active = sec.id; break;
    }
  }
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${active}`));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal-on-scroll animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      e.target.classList.add('is-visible');
      // io.unobserve(e.target); // uncomment if you want fire-once
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Typed tagline (optional)
const typedEl = document.getElementById('typed');
if (typedEl && window.Typed){
    new Typed('#typed', {
        strings: [
          "Software Engineer",
          "Full-Stack Developer",
          "Cloud Practitioner",
          "Senior Java Specialist",
          "Spring Boot & Microservices Expert",
          "Event-Driven Systems Engineer (Kafka/SQS)",
          "CI/CD & DevOps Enthusiast",
          "Frontend Engineer (Angular/React)",
          "AI/ML & Data Engineering Explorer"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true
      });
}
  
