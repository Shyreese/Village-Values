
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const hamburger = document.getElementById('hamburger-menu');
        const mobileNav = document.getElementById('mobile-nav');
         // Auto-mark current page nav links as active (works for multipage site)
    (function markActiveNavLinks() {
    const links = document.querySelectorAll('.main-nav a, .mobile-nav a, .footer-column a');
    const rawCurrent = (location.pathname.split('/').pop() || 'Home.html').toLowerCase();
    const normalizedCurrent = (rawCurrent === '' || rawCurrent === 'index.html') ? 'home.html' : rawCurrent;

    links.forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;

      // Hash links (single-page anchors)
      if (href.startsWith('#')) {
        if ((location.hash && location.hash === href) || (!location.hash && href === '#home')) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
        return;
      }

      try {
        const linkPath = new URL(href, location.origin).pathname.split('/').pop().toLowerCase();
        const normalizedLink = (linkPath === '' || linkPath === 'index.html') ? 'home.html' : linkPath;
        if (normalizedLink === normalizedCurrent) a.classList.add('active'); else a.classList.remove('active');
      } catch (e) {
        // fallback for file:// or odd hrefs
        if (href.toLowerCase().endsWith(normalizedCurrent)) a.classList.add('active'); else a.classList.remove('active');
      }
    });
  })();

        /*function showPage(pageId, pushState = true) {
            if (!pageId) pageId = 'home';
            
            if (pageId === 'enrollment') {
                pageId = 'home';
                setTimeout(() => {
                    document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }

            pages.forEach(page => page.classList.remove('active'));
            const targetPage = document.getElementById(pageId) || document.getElementById('home');
            targetPage.classList.add('active');

            if (pushState) {
                try {
                    history.pushState({pageId}, `${pageId}`, `#${pageId}`);
                } catch (e) {
                    // Silently fail on security errors (e.g., in sandboxed environments)
                }
            }

            const targetHref = `#${pageId}`;
            document.querySelectorAll('.main-nav a, .mobile-nav a, .footer-column a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === targetHref || (link.getAttribute('href') === '#blog' && pageId.startsWith('article-'))) {
                    link.classList.add('active');
                }
            });
            
            closeMobileMenu();
            if (pageId === 'home') {
                 window.scrollTo({ top: 0, behavior: 'auto' });
            }
        }

       navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const pageId = href.substring(1);
                    showPage(pageId);
                }
            });
        });

        window.addEventListener('popstate', (e) => {
            const pageId = (e.state && e.state.pageId) ? e.state.pageId : 'home';
            showPage(pageId, false);
        });
        
        const initialPage = window.location.hash ? window.location.hash.substring(1) : 'home';
        showPage(initialPage, false);*/

        function openMobileMenu() {
            hamburger.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            mobileNav.classList.add('active');
        }

        function closeMobileMenu() {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileNav.classList.remove('active');
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (mobileNav.classList.contains('active')) closeMobileMenu();
            else openMobileMenu();
        });
        
        document.addEventListener('click', function(e) {
            if (mobileNav.classList.contains('active') && !mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        document.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('click', function() { this.classList.toggle('is-flipped'); });
            card.addEventListener('mouseleave', function() { this.classList.remove('is-flipped'); });
        });
        

// Accordion: delegated, robust handler + console debug
(function setupAccordion() {
  const ACC_SEL = '.accordion-header';
  // initialize panels if present
  document.querySelectorAll('.accordion-content').forEach(content => {
    content.hidden = content.hasAttribute('data-open') ? false : true;
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.32s ease, padding 0.32s ease';
    content.style.maxHeight = content.hidden ? '0' : content.scrollHeight + 'px';
  });

  // click delegation
  document.addEventListener('click', (e) => {
    const header = e.target.closest(ACC_SEL);
    if (!header) return;
    e.preventDefault();

    if (header.tagName === 'BUTTON' && !header.hasAttribute('type')) header.setAttribute('type', 'button');
    if (header.tagName !== 'BUTTON') { header.setAttribute('role', 'button'); header.tabIndex = 0; }

    const item = header.closest('.accordion-item') || header.parentElement;
    const content = header.nextElementSibling;
    if (!content) {
      console.warn('Accordion: no .accordion-content sibling for', header);
      return;
    }

    const isOpen = header.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      header.setAttribute('aria-expanded', 'false');
      content.style.maxHeight = '0';
      item && item.classList.remove('active');
      setTimeout(() => { content.hidden = true; }, 350);
    } else {
      header.setAttribute('aria-expanded', 'true');
      content.hidden = false;
      requestAnimationFrame(() => { content.style.maxHeight = content.scrollHeight + 'px'; });
      item && item.classList.add('active');
    }
  });

  // keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const header = e.target.closest(ACC_SEL);
      if (!header) return;
      e.preventDefault();
      header.click();
    }
  });

  console.log('Accordion setup — headers found:', document.querySelectorAll(ACC_SEL).length);
})();
        // Carousel functionality
        const carousel = document.querySelector('#safety-carousel');
        if (carousel) {
            const carouselTrack = carousel.querySelector('.carousel-track');
            const slides = Array.from(carouselTrack.children);
            const dotsNav = carousel.querySelector('.carousel-dots');
            let slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;
            let currentIndex = 0;
            let slideInterval;

            function createDots() {
                dotsNav.innerHTML = '';
                slides.forEach((_, i) => {
                    const dot = document.createElement('button');
                    dot.classList.add('carousel-dot');
                    if (i === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => {
                        moveToSlide(i);
                        resetInterval();
                    });
                    dotsNav.appendChild(dot);
                });
            }

            function updateDots(targetIndex) {
                 const dots = Array.from(dotsNav.children);
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === targetIndex);
                });
            }

            function moveToSlide(targetIndex) {
                if (slides.length > 0) {
                    carouselTrack.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
                    currentIndex = targetIndex;
                    updateDots(currentIndex);
                }
            }
            
            function startInterval() {
                 slideInterval = setInterval(() => {
                    let nextIndex = (currentIndex + 1) % slides.length;
                    moveToSlide(nextIndex);
                }, 5000);
            }
            
            function resetInterval() {
                clearInterval(slideInterval);
                startInterval();
            }
            
            function setupCarousel() {
                if (slides.length > 0) {
                    slideWidth = slides[0].getBoundingClientRect().width;
                    createDots();
                    moveToSlide(currentIndex);
                    resetInterval();
                }
            }

            window.addEventListener('resize', () => {
                if(slides.length > 0) {
                    slideWidth = slides[0].getBoundingClientRect().width;
                    moveToSlide(currentIndex);
                }
            });
            
            setupCarousel();
        }
        
        function handleFormSubmit(formId, successMessageId) {
            const form = document.getElementById(formId);
            const successMessage = document.getElementById(successMessageId);
            if (form && successMessage) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    if(form.checkValidity()) {
                        form.style.display = 'none';
                        successMessage.style.display = 'block';
                    } else {
                        form.reportValidity();
                    }
                });
            }
        }
        
        handleFormSubmit('contact-form', 'contact-form-success');
        handleFormSubmit('internship-form', 'internship-form-success');
        
        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    });
