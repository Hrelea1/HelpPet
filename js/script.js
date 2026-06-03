document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = mobileMenuBtn.querySelector('i');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
      } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        document.body.style.overflow = '';
      });
    });
  }

  // Navbar Sticky Effect
  const navbar = document.querySelector('.navbar');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state

  // Scroll Reveal Animation using Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });

  // ============================================================
  // Cookie Consent
  // ============================================================

  const STORAGE_KEY = 'helppets_cookie_consent';

  const banner  = document.getElementById('cookie-banner');
  const modal   = document.getElementById('cookie-modal');
  const overlay = document.getElementById('cookie-modal-overlay');

  const btnAcceptAll        = document.getElementById('cookie-accept-all');
  const btnNecessary        = document.getElementById('cookie-accept-necessary');
  const btnOpenSettings     = document.getElementById('cookie-open-settings');
  const btnOpenSettingsFooter = document.getElementById('open-cookie-settings');

  const btnModalClose       = document.getElementById('cookie-modal-close');
  const btnSaveSettings     = document.getElementById('cookie-save-settings');
  const btnAcceptAllModal   = document.getElementById('cookie-accept-all-modal');

  const toggleAnalytics  = document.getElementById('cookie-analytics');
  const toggleMarketing  = document.getElementById('cookie-marketing');

  // Load existing consent
  function loadConsent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  }

  // Save consent
  function saveConsent(analytics, marketing) {
    const consent = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
  }

  // Apply consent choices (hook for analytics/marketing scripts)
  function applyConsent(consent) {
    // Analytics: placeholder – replace with actual GA init if needed
    if (consent.analytics) {
      // e.g. window.dataLayer.push({ event: 'consent_granted_analytics' });
    }
    if (consent.marketing) {
      // e.g. fbq('consent', 'grant');
    }
  }

  // Show/hide banner
  function showBanner() { banner.hidden = false; }
  function hideBanner() { banner.hidden = true; }

  // Show/hide modal
  function openModal() {
    // Sync toggles with current stored prefs
    const consent = loadConsent();
    if (consent) {
      toggleAnalytics.checked = consent.analytics;
      toggleMarketing.checked = consent.marketing;
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  // Decide whether to show banner on load
  const existing = loadConsent();
  if (!existing) {
    // Slight delay so page renders first
    setTimeout(showBanner, 800);
  } else {
    applyConsent(existing);
  }

  // Accept all
  function acceptAll() {
    saveConsent(true, true);
    hideBanner();
    closeModal();
  }

  // Accept necessary only
  function acceptNecessary() {
    saveConsent(false, false);
    hideBanner();
    closeModal();
  }

  // Wire up buttons
  btnAcceptAll.addEventListener('click', acceptAll);
  btnNecessary.addEventListener('click', acceptNecessary);
  btnOpenSettings.addEventListener('click', () => { openModal(); });

  btnAcceptAllModal.addEventListener('click', acceptAll);
  btnModalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Footer "Setări Cookies" link
  if (btnOpenSettingsFooter) {
    btnOpenSettingsFooter.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // Save custom settings
  btnSaveSettings.addEventListener('click', () => {
    saveConsent(toggleAnalytics.checked, toggleMarketing.checked);
    hideBanner();
    closeModal();
  });

  // Keyboard: close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
});
