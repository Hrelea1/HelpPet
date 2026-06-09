document.addEventListener('DOMContentLoaded', () => {
  
  // ============================================================
  // Mobile Navigation Menu Toggle
  // ============================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  
  if (mobileMenuBtn && navMenu) {
    const menuIcon = mobileMenuBtn.querySelector('.material-symbols-outlined');
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isActive = navMenu.classList.contains('active');
      
      if (isActive) {
        menuIcon.textContent = 'close';
        document.body.style.overflow = 'hidden';
      } else {
        menuIcon.textContent = 'menu';
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking navigation links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.textContent = 'menu';
        document.body.style.overflow = '';
      });
    });
  }

  // ============================================================
  // Sticky Header Effect
  // ============================================================
  const header = document.querySelector('header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      header.classList.remove('scrolled');
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run on load to set initial state

  // ============================================================
  // Scroll Reveal Animations using Intersection Observer
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Add a slight cascade delay based on index for grouped reveals
        setTimeout(() => {
          entry.target.classList.add('active');
        }, idx * 50);
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });

  // ============================================================
  // Hero Image Mousemove Parallax Effect
  // ============================================================
  const heroSection = document.getElementById('home');
  const heroImg = document.getElementById('hero-img');
  
  if (heroSection && heroImg && window.innerWidth > 992) {
    heroSection.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.012;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.012;
      heroImg.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
    });
    
    // Reset position when cursor leaves hero section
    heroSection.addEventListener('mouseleave', () => {
      heroImg.style.transform = 'scale(1) translate(0px, 0px)';
    });
  }

  // ============================================================
  // Premium Testimonials Slider (Cross-fade)
  // ============================================================
  const testimonials = [
    {
      quote: "O experiență cu adevărat premium. Atenția la detalii și dragostea pentru animale se simt în fiecare colț al clinicii.",
      author: "Elena & Luna"
    },
    {
      quote: "Recomand cu toată căldura! Echipa este extrem de profesionistă, empatică și au salvat motanul meu în urma unui caz complicat.",
      author: "Andrei & Felix"
    },
    {
      quote: "Aparatura modernă și serviciile rapide fac o diferență majoră. Cabinetul este curat, iar atmosfera este caldă și primitoare.",
      author: "Raluca & Max"
    }
  ];

  let currentSlide = 0;
  const quoteElem = document.getElementById('testimonial-quote');
  const authorElem = document.getElementById('testimonial-author');
  const prevBtn = document.getElementById('prev-testimonial-btn');
  const nextBtn = document.getElementById('next-testimonial-btn');

  if (quoteElem && authorElem && prevBtn && nextBtn) {
    // Set transitions dynamically for smooth fading
    quoteElem.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    authorElem.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

    const updateTestimonial = (index) => {
      // Fade out
      quoteElem.style.opacity = '0';
      quoteElem.style.transform = 'translateY(10px)';
      authorElem.style.opacity = '0';
      authorElem.style.transform = 'translateY(5px)';

      setTimeout(() => {
        // Swap content
        quoteElem.textContent = `"${testimonials[index].quote}"`;
        authorElem.textContent = testimonials[index].author;
        
        // Fade in
        quoteElem.style.opacity = '1';
        quoteElem.style.transform = 'translateY(0)';
        authorElem.style.opacity = '1';
        authorElem.style.transform = 'translateY(0)';
      }, 250);
    };

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % testimonials.length;
      updateTestimonial(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentSlide);
    });
  }

  // ============================================================
  // GDPR Cookie Preference & Banner System
  // ============================================================
  const STORAGE_KEY = 'helppets_cookie_consent';

  const banner = document.getElementById('cookie-banner');
  const modal = document.getElementById('cookie-modal');
  const overlay = document.getElementById('cookie-modal-overlay');

  const btnAcceptAll = document.getElementById('cookie-accept-all');
  const btnNecessary = document.getElementById('cookie-accept-necessary');
  const btnOpenSettings = document.getElementById('cookie-open-settings');
  const btnOpenSettingsFooter = document.getElementById('open-cookie-settings');

  const btnModalClose = document.getElementById('cookie-modal-close');
  const btnSaveSettings = document.getElementById('cookie-save-settings');

  const toggleAnalytics = document.getElementById('cookie-analytics');
  const toggleMarketing = document.getElementById('cookie-marketing');

  // Load cookies preference
  const loadConsent = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  };

  // Save cookies preference
  const saveConsent = (analytics, marketing) => {
    const consent = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
  };

  // Apply consent choices (scripts triggers)
  const applyConsent = (consent) => {
    if (consent.analytics) {
      console.log('Analytics cookies accepted.');
      // e.g. initialize Google Analytics here if loaded
    }
    if (consent.marketing) {
      console.log('Marketing cookies accepted.');
      // e.g. initialize pixel tracking here if loaded
    }
  };

  // Banner animations show/hide
  const showBanner = () => {
    banner.hidden = false;
    // Slight delay to trigger CSS transition smoothly
    setTimeout(() => {
      banner.classList.add('show');
    }, 100);
  };

  const hideBanner = () => {
    banner.classList.remove('show');
    // Hide node after animation finishes
    setTimeout(() => {
      banner.hidden = true;
    }, 800);
  };

  // Modal controls show/hide
  const openModal = () => {
    const consent = loadConsent();
    if (consent) {
      if (toggleAnalytics) toggleAnalytics.checked = consent.analytics;
      if (toggleMarketing) toggleMarketing.checked = consent.marketing;
    }
    modal.hidden = false;
    setTimeout(() => {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }, 50);
  };

  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.hidden = true;
      document.body.style.overflow = '';
    }, 400);
  };

  // Check initial consent state
  const existingConsent = loadConsent();
  if (!existingConsent) {
    // Show banner with delay after initial paint
    setTimeout(showBanner, 1200);
  } else {
    applyConsent(existingConsent);
  }

  // Accept all cookie types
  const acceptAllCookies = () => {
    saveConsent(true, true);
    hideBanner();
    closeModal();
  };

  // Accept essential only
  const acceptNecessaryCookies = () => {
    saveConsent(false, false);
    hideBanner();
    closeModal();
  };

  // Click triggers binding
  if (btnAcceptAll) btnAcceptAll.addEventListener('click', acceptAllCookies);
  if (btnNecessary) btnNecessary.addEventListener('click', acceptNecessaryCookies);
  
  if (btnOpenSettings) {
    btnOpenSettings.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (btnOpenSettingsFooter) {
    btnOpenSettingsFooter.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (btnModalClose) btnModalClose.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', () => {
      const isAnalyticsChecked = toggleAnalytics ? toggleAnalytics.checked : false;
      const isMarketingChecked = toggleMarketing ? toggleMarketing.checked : false;
      saveConsent(isAnalyticsChecked, isMarketingChecked);
      hideBanner();
      closeModal();
    });
  }

  // Close modal on escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });

});
