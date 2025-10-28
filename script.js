
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const hamburger = document.getElementById('hamburger-menu');
        const mobileNav = document.getElementById('mobile-nav');

        function showPage(pageId, pushState = true) {
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
        showPage(initialPage, false);

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
        
        // Accordion functionality
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const content = header.nextElementSibling;
                
                item.classList.toggle('active');

                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.padding = '0 1rem 1.5rem';
                } else {
                    content.style.maxHeight = '0';
                    content.style.padding = '0 1rem';
                }
            });
        });


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
