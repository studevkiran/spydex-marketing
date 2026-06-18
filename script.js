/* ============================================================
   SPYDEX MARKETING — Global Script
   ============================================================ */

// ── SCROLL PROGRESS ──
const bar = document.createElement('div');
bar.id = 'scroll-bar';
document.body.prepend(bar);
window.addEventListener('scroll', () => {
  bar.style.width = `${(window.scrollY / (document.body.scrollHeight - innerHeight)) * 100}%`;
}, { passive: true });

// ── CUSTOM CURSOR ──
const dot  = document.createElement('div'); dot.className  = 'c-dot';
const ring = document.createElement('div'); ring.className = 'c-ring';
document.body.append(dot, ring);
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function loop() {
  rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11;
  dot.style.cssText  = `left:${mx}px;top:${my}px`;
  ring.style.cssText = `left:${rx}px;top:${ry}px`;
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a,button,.service-card,.stat-card,.portfolio-card,.blog-card,.testi-card,.why-stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

// ── NAV ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', scrollY > 30), { passive: true });

// ── HAMBURGER ──
const hb  = document.querySelector('.hamburger');
const mob = document.querySelector('.mobile-nav');
hb?.addEventListener('click', () => mob?.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => mob?.classList.remove('open')));

// ── ACTIVE NAV LINK ──
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// ── SCROLL REVEAL ──
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

// ── COUNTER ANIMATION ──
function runCounter(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || '';
  let n = 0; const step = target / 70;
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = (n < 10 && target < 100 ? n.toFixed(0) : Math.floor(n)) + suffix;
    if (n >= target) clearInterval(t);
  }, 18);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); cntObs.unobserve(e.target); } });
}, { threshold: 0.6 });
document.querySelectorAll('[data-target]').forEach(el => cntObs.observe(el));

// ── 3D TILT on cards ──
document.querySelectorAll('.service-card, .why-stat-card, .testi-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const r = this.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    this.style.transform = `perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-8px) scale(1.01)`;
  });
  card.addEventListener('mouseleave', function() {
    this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    this.style.transform = '';
    setTimeout(() => this.style.transition = '', 500);
  });
  card.addEventListener('mouseenter', function() { this.style.transition = 'box-shadow 0.2s ease'; });
});

// ── MAGNETIC BUTTONS ──
document.querySelectorAll('.btn-primary, .btn-white, .btn-navy').forEach(btn => {
  btn.addEventListener('mousemove', function(e) {
    const r = this.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width/2) * 0.3;
    const dy = (e.clientY - r.top  - r.height/2) * 0.3;
    this.style.transform = `translate(${dx}px,${dy}px) translateY(-3px)`;
  });
  btn.addEventListener('mouseleave', function() { this.style.transform = ''; });
});

// ── PARALLAX HERO GLOWS ──
window.addEventListener('scroll', () => {
  const sy = scrollY;
  document.querySelectorAll('.hero-glow').forEach((g,i) => {
    g.style.transform = `translateY(${sy * (i * 0.12 + 0.08)}px)`;
  });
}, { passive: true });

// ── CHART BAR ANIMATE ──
const chartObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.chart-bar').forEach((bar, i) => {
        setTimeout(() => { bar.style.opacity = '1'; }, i * 120);
      });
      chartObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.about-chart').forEach(c => {
  c.querySelectorAll('.chart-bar').forEach(b => b.style.opacity = '0');
  chartObs.observe(c);
});

// ── PORTFOLIO FILTER (portfolio.html) ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const cat = this.dataset.cat;
    document.querySelectorAll('.portfolio-card').forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = show ? '1' : '0';
      card.style.transform = show ? '' : 'scale(0.95)';
      card.style.pointerEvents = show ? '' : 'none';
    });
  });
});

// ── CONTACT FORM → WHATSAPP ──
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const d = new FormData(this);
  const name     = d.get('name')     || '';
  const phone    = d.get('phone')    || '';
  const email    = d.get('email')    || '';
  const business = d.get('business') || 'Not provided';
  const service  = d.get('service')  || '';
  const budget   = d.get('budget')   || '';
  const message  = d.get('message')  || 'No message';

  const text =
    `Hi Spydex Marketing! 👋\n\n` +
    `*New Enquiry from Website*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `📧 *Email:* ${email}\n` +
    `🏢 *Business:* ${business}\n` +
    `🎯 *Service:* ${service}\n` +
    `💰 *Budget:* ${budget}\n\n` +
    `💬 *Message:*\n${message}\n\n` +
    `_(Sent via spydexmarketing.com)_`;

  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '✓ Redirecting to WhatsApp…';
  btn.style.background = 'linear-gradient(135deg,#00c563,#00a651)';

  setTimeout(() => {
    window.open(`https://wa.me/917483895908?text=${encodeURIComponent(text)}`, '_blank');
    btn.innerHTML = 'Book My Free Strategy Call →';
    btn.style.background = '';
    this.reset();
  }, 800);
});

// ── STAGGER REVEAL for grids ──
document.querySelectorAll('.services-grid, .testimonials-grid, .portfolio-grid, .blog-grid, .why-right, .about-card-stack').forEach(grid => {
  [...grid.children].forEach((child, i) => {
    child.classList.add('reveal');
    child.setAttribute('data-delay', Math.min(i + 1, 6));
    revObs.observe(child);
  });
});
