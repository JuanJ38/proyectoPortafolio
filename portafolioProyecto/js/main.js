// ============================================
//  MAIN.JS — corregido y limpio
// ============================================

/* ---- Navbar scroll ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---- Burger menu ---- */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  }));
}

/* ---- Active nav link ---- */
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navItems.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ---- Scroll reveal con IntersectionObserver ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function observeAll() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ---- RENDER: Skills ---- */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  DATA.skills.forEach((sk, i) => {
    const el = document.createElement('div');
    el.className = 'skill-item';
    el.innerHTML = `
      <div class="skill-header">
        <span class="skill-name">${sk.name}</span>
        <span class="skill-pct">${sk.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-bar" data-width="${sk.level}" style="width:0%"></div>
      </div>`;
    grid.appendChild(el);
  });
}

function animateBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = bar.getAttribute('data-width') + '%';
  });
}

/* ---- RENDER: Timeline ---- */
function renderTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  DATA.experience.forEach((exp) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="tl-left">
        <div class="tl-dot tl-${exp.color}"></div>
        <div class="tl-line"></div>
      </div>
      <div class="tl-card">
        <p class="tl-period">${exp.period}</p>
        <h3 class="tl-role">${exp.role}</h3>
        <p class="tl-company">${exp.company}</p>
        <ul class="tl-items">
          ${exp.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>`;
    tl.appendChild(el);
  });
}

/* ---- RENDER: Projects ---- */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  DATA.projects.forEach((p) => {
    const el = document.createElement('div');
    el.className = 'project-card';
    el.innerHTML = `
      <div class="proj-icon">${p.icon}</div>
      <div class="proj-body">
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">
          ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
        </div>
        <a href="${p.link}" target="_blank" class="proj-link">
          Ver en GitHub
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>

       ${p.liveLink ? `
<a href="${p.liveLink}" target="_blank" class="proj-link" style="margin-left:8px; background: transparent; color: white; border: 1px solid white; padding: 6px 14px; border-radius: 6px; text-decoration: none; font-size: 12px; display: inline-flex; align-items: center; gap: 4px; font-weight: 500; transition: all 0.2s ease;">
  🌐 Ver en vivo
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
</a>` : ''}

      </div>`;
    grid.appendChild(el);
  });
}

/* ---- RENDER: Education ---- */
function renderEducation() {
  const grid = document.getElementById('eduGrid');
  if (!grid) return;

  const unis  = DATA.education.filter(e => e.type === 'university');
  const certs = DATA.education.filter(e => e.type === 'cert');

  const uniSection = document.createElement('div');
  uniSection.innerHTML = '<h3 class="edu-sub-title">// formación académica</h3>';
  unis.forEach(u => {
    uniSection.innerHTML += `
      <div class="edu-card">
        <span class="edu-icon">${u.icon}</span>
        <div>
          <p class="edu-title">${u.title}</p>
          <p class="edu-place">${u.place}</p>
          <p class="edu-period">${u.period}</p>
        </div>
      </div>`;
  });

  const certSection = document.createElement('div');
  certSection.innerHTML = '<h3 class="edu-sub-title">// certificaciones</h3>';
  certs.forEach(c => {
    certSection.innerHTML += `
      <div class="edu-card">
        <span class="edu-icon">${c.icon}</span>
        <div>
          <p class="edu-title">${c.title}</p>
          <p class="edu-place">${c.place}</p>
          ${c.detail ? `<p class="edu-detail">${c.detail}</p>` : ''}
        </div>
      </div>`;
  });

  grid.appendChild(uniSection);
  grid.appendChild(certSection);
}

/* ---- RENDER: Contact ---- */
const contactIcons = {
  email:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>`,
  github:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  location: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

function renderContact() {
  const cards = document.getElementById('contactCards');
  if (!cards) return;
  DATA.contact.forEach((c) => {
    const el = document.createElement('a');
    el.className = 'contact-card';
    el.href = c.href;
    if (c.href.startsWith('http')) el.target = '_blank';
    el.innerHTML = `
      <span class="cc-icon">${contactIcons[c.icon] || ''}</span>
      <span class="cc-label">${c.label}</span>
      <span class="cc-value">${c.value}</span>`;
    cards.appendChild(el);
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderTimeline();
  renderProjects();
  renderEducation();
  renderContact();

  // Activar reveal en todos los elementos estáticos y dinámicos
  setTimeout(observeAll, 100);

  // Animar barras cuando se llega a la sección
  const skillsSection = document.getElementById('sobre-mi');
  if (skillsSection) {
    const barObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateBars(); barObserver.disconnect(); }
    }, { threshold: 0.2 });
    barObserver.observe(skillsSection);
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});