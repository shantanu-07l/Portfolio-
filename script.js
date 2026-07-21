function getIcon(name) {
  const icons = {
    'code': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    'layout': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    'server': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    'cpu': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    'wrench': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    'brain': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>`,
    'home': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    'check': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    'briefcase': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    'building': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`,
    'calendar': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    'github': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    'leetcode': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-6.77-6.646c-.742-.727-1.897-.732-2.652-.01l-.014.014-4.248 4.168a2.532 2.532 0 0 1-1.396.657 2.457 2.457 0 0 1-1.637-.588 2.364 2.364 0 0 1-.806-1.745c0-1.077.728-2.029 1.767-2.316l8.807-8.643a1.375 1.375 0 0 0 .408-1.253 1.375 1.375 0 0 0-1.374-1.254zm10.435 15.345l-2.396 2.392c-2.211 2.207-5.815 2.239-8.063.074l-4.277-4.193a5.938 5.938 0 0 1-1.271-1.818 5.83 5.83 0 0 1-.349-1.017 5.527 5.527 0 0 1-.062-2.362 5.35 5.35 0 0 1 .125-.513 5.266 5.266 0 0 1 1.209-2.104l3.854-4.126 5.406-5.788a1.374 1.374 0 0 1 1.922 0l8.777 8.611c1.039.287 1.767 1.239 1.767 2.316a2.364 2.364 0 0 1-.806 1.745 2.457 2.457 0 0 1-1.637.588 2.532 2.532 0 0 1-1.396-.657l-4.248-4.168-.014-.014c-.755-.722-1.91-.717-2.652.01l-6.77 6.646c-.54.54-.54 1.414 0 1.954l6.77 6.646c.755.722 1.91.717 2.652-.01l.014-.014 4.248-4.168a2.532 2.532 0 0 1 1.396-.657 2.457 2.457 0 0 1 1.637.588 2.364 2.364 0 0 1 .806 1.745c0 1.077-.728 2.029-1.767 2.316z"></path></svg>`,
    'external-link': `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
  };
  return icons[name] || '';
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA !== 'undefined') {
    // Skills Grid
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid && PORTFOLIO_DATA.skills) {
      skillsGrid.innerHTML = PORTFOLIO_DATA.skills.map(skill => `
        <div class="skill-card reveal">
          <div class="skill-card-header">
            <div class="skill-icon">${getIcon(skill.icon)}</div>
            <h3 class="skill-category">${skill.category}</h3>
          </div>
          <div class="skill-tags">
            ${skill.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    // Certifications Grid
    const certGrid = document.getElementById('certGrid');
    if (certGrid && PORTFOLIO_DATA.certifications) {
      certGrid.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
        <div class="cert-card reveal">
          <div class="cert-dot"></div>
          <div class="cert-info">
            <p class="cert-name">${cert.title}</p>
            <p class="cert-issuer">${cert.issuer}</p>
          </div>
        </div>
      `).join('');
    }

    // Projects Container
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer && PORTFOLIO_DATA.projects) {
      projectsContainer.innerHTML = PORTFOLIO_DATA.projects.map(project => `
        <div class="project-card reveal">
          <div class="project-header">
            <div class="project-title-group">
              <div class="project-icon">${getIcon(project.icon || 'code')}</div>
              <h3 class="project-title">${project.title}</h3>
            </div>
          </div>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech">
            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <ul class="project-highlights">
            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
          <div class="project-links">
            ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link" aria-label="GitHub">${getIcon('github')}<span class="project-link-label">GitHub</span></a>` : ''}
            ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener" class="project-link" aria-label="Live Demo">${getIcon('external-link')}<span class="project-link-label">Live Demo</span></a>` : ''}
          </div>
        </div>
      `).join('');
    }

    // Timeline Container
    const timelineContainer = document.getElementById('timelineContainer');
    if (timelineContainer && PORTFOLIO_DATA.experience) {
      timelineContainer.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
        <div class="timeline-dot"></div>
        <div class="timeline-card reveal">
          <div class="exp-header">
            <svg class="exp-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            <h3 class="exp-role">${exp.role}</h3>
          </div>
          <div class="exp-meta">
            <p class="exp-company">${getIcon('building')} ${exp.company}</p>
            <p class="exp-duration">${getIcon('calendar')} ${exp.duration}</p>
          </div>
          <span class="exp-badge">${exp.badge}</span>
          <ul class="exp-responsibilities">
            ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }
  }

  // Smooth Scroll Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navLinks = document.getElementById('navLinks');
        const navHamburger = document.getElementById('navHamburger');
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          navHamburger.classList.remove('active');
        }
      }
    });
  });

  // Active Section Highlighting
  const sections = document.querySelectorAll('section.section');
  const navLinksList = document.querySelectorAll('.nav-link');
  
  if (sections.length > 0 && navLinksList.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Scroll Event Listeners (Navbar bg, Scroll Indicator)
  const navbar = document.querySelector('.navbar');
  const scrollIndicator = document.getElementById('scrollIndicator');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          navbar?.classList.add('scrolled');
        } else {
          navbar?.classList.remove('scrolled');
        }

        if (window.scrollY > 100) {
          scrollIndicator?.classList.add('hidden');
        } else {
          scrollIndicator?.classList.remove('hidden');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile Hamburger Menu
  const navHamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  if (navHamburger && navLinks) {
    navHamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navHamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navHamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navHamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      let isValid = true;
      
      const setError = (input, show) => {
        const errorEl = input.nextElementSibling;
        if (errorEl && errorEl.classList.contains('form-error')) {
          if (show) errorEl.classList.add('show');
          else errorEl.classList.remove('show');
        }
      };

      if (!nameInput.value.trim()) {
        setError(nameInput, true);
        isValid = false;
      } else {
        setError(nameInput, false);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, true);
        isValid = false;
      } else {
        setError(emailInput, false);
      }

      if (!messageInput.value.trim()) {
        setError(messageInput, true);
        isValid = false;
      } else {
        setError(messageInput, false);
      }

      if (isValid) {
        const recipient = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.personal && PORTFOLIO_DATA.personal.email) || 'shantanusapkal07@gmail.com';
        const subject = encodeURIComponent(`Portfolio Contact from ${nameInput.value.trim()}`);
        const body = encodeURIComponent(messageInput.value.trim());
        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Create a temporary link and click it to reliably open the mail app
        const a = document.createElement('a');
        a.href = mailtoLink;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Delay reset so the mailto has time to trigger
        setTimeout(() => { contactForm.reset(); }, 1000);
      }
    });
  }
});
