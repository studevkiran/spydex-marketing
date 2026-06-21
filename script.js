/* ============================================================
   SPYDEX MARKETING — Global Script
   ============================================================ */

// ── 0. SVG ICON SPRITE ──────────────────────────────────────
document.body.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" id="icon-sprite"><defs>
<symbol id="ic-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9a19.79 19.79 0 01-3.07-8.63A2 2 0 011.72 2h3A2 2 0 017 3.64c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.73a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z"/></symbol>
<symbol id="ic-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="3"/></symbol>
<symbol id="ic-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></symbol>
<symbol id="ic-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></symbol>
<symbol id="ic-smartphone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"/></symbol>
<symbol id="ic-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></symbol>
<symbol id="ic-chartbar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></symbol>
<symbol id="ic-pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></symbol>
<symbol id="ic-monitor" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></symbol>
<symbol id="ic-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></symbol>
<symbol id="ic-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></symbol>
<symbol id="ic-rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></symbol>
<symbol id="ic-trending" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></symbol>
<symbol id="ic-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></symbol>
<symbol id="ic-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></symbol>
<symbol id="ic-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></symbol>
<symbol id="ic-timer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/><line x1="6.5" y1="2" x2="17.5" y2="2"/></symbol>
</defs></svg>`);

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

// ── NEWSLETTER FORM (blog.html) ──
const nlForm = document.getElementById('newsletterForm');
if (nlForm) {
  const nlInput = document.getElementById('newsletterEmail');
  nlInput.addEventListener('focus', () => nlInput.style.borderColor = 'var(--green)');
  nlInput.addEventListener('blur',  () => nlInput.style.borderColor = '');
  nlForm.addEventListener('submit', e => {
    e.preventDefault();
    nlForm.innerHTML = '<p style="color:var(--green);font-weight:700;padding:14px">✓ You\'re subscribed! Welcome aboard.</p>';
  });
}

// ── STAGGER REVEAL for grids ──
document.querySelectorAll('.services-grid, .testimonials-grid, .portfolio-grid, .blog-grid, .why-right, .about-card-stack').forEach(grid => {
  [...grid.children].forEach((child, i) => {
    child.classList.add('reveal');
    child.setAttribute('data-delay', Math.min(i + 1, 6));
    revObs.observe(child);
  });
});
