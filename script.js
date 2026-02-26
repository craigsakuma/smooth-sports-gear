/* ============================================================
   SMOOTH SPORTS GEAR — script.js
============================================================ */

/* ============================================================
   PHOTO CONFIG — reads photos.js and applies to the DOM
============================================================ */
function applyPhotoConfig() {
  if (typeof SITE_PHOTOS === 'undefined') return;

  // Hero background
  if (SITE_PHOTOS.hero_background) {
    document.documentElement.style.setProperty(
      '--hero-bg-url',
      `url('images/gallery/${SITE_PHOTOS.hero_background}')`
    );
  }

  // Story portrait
  if (SITE_PHOTOS.story_portrait) {
    const portrait = document.querySelector('.story-photo-main img');
    if (portrait) portrait.src = 'images/gallery/' + SITE_PHOTOS.story_portrait;
  }

  // Story grid
  if (SITE_PHOTOS.story_grid) {
    document.querySelectorAll('.story-mini-item img').forEach((img, i) => {
      if (SITE_PHOTOS.story_grid[i]) {
        img.src = 'images/gallery/' + SITE_PHOTOS.story_grid[i];
      }
    });
  }

  // Product photos
  if (SITE_PHOTOS.products) {
    Object.entries(SITE_PHOTOS.products).forEach(([slot, file]) => {
      if (!file) return;
      const card = document.querySelector(`[data-product="${slot}"]`);
      if (!card) return;
      const placeholder = card.querySelector('.product-img-placeholder');
      if (placeholder) {
        const img = document.createElement('img');
        img.src = 'images/products/' + file;
        img.alt = placeholder.querySelector('.ph-label') ? placeholder.querySelector('.ph-label').textContent : slot;
        placeholder.replaceWith(img);
      }
    });
  }

  // Gallery
  if (SITE_PHOTOS.gallery) {
    document.querySelectorAll('.gallery-item').forEach((item, i) => {
      const photo = SITE_PHOTOS.gallery[i];
      if (!photo) return;
      const img     = item.querySelector('img');
      const caption = item.querySelector('.gallery-overlay span');
      if (img)     { img.src = 'images/gallery/' + photo.file; img.alt = photo.caption; }
      if (caption) caption.textContent = photo.caption;
    });
  }
}

applyPhotoConfig();


document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. NAVBAR — add .scrolled class on scroll
  ---------------------------------------------------------- */
  const navbar = document.getElementById('navbar');

  const handleNavScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  /* ----------------------------------------------------------
     2. MOBILE HAMBURGER MENU
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });


  /* ----------------------------------------------------------
     3. SCROLL REVEAL — Intersection Observer
  ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });


  /* ----------------------------------------------------------
     4. COUNTER ANIMATIONS — hero stats
  ---------------------------------------------------------- */
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let countersStarted = false;

  const animateCounter = (el) => {
    const target    = parseInt(el.dataset.target, 10);
    const duration  = 1600;
    const step      = 16;
    const increment = target / (duration / step);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, step);
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        counters.forEach(animateCounter);
      }
    },
    { threshold: 0.5 }
  );

  const statsBar = document.querySelector('.hero-stats');
  if (statsBar) statsObserver.observe(statsBar);


  /* ----------------------------------------------------------
     5. CONTACT FORM — Formspree via fetch (no page reload)
  ---------------------------------------------------------- */
  const form        = document.getElementById('contact-form');
  const submitBtn   = document.getElementById('submit-btn');
  const formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const action = form.getAttribute('action');
      if (action.includes('YOUR_FORM_ID')) {
        alert('Form not yet configured. Please update the Formspree form ID in index.html.');
        return;
      }

      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending…';

      try {
        const response = await fetch(action, {
          method:  'POST',
          body:    new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          form.style.display = 'none';
          formSuccess.classList.add('visible');
        } else {
          throw new Error('Server error');
        }
      } catch {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Message';
        alert('Something went wrong. Please try again or contact us directly.');
      }
    });
  }


  /* ----------------------------------------------------------
     6. SMOOTH SCROLL — for older browsers that ignore CSS
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href   = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
