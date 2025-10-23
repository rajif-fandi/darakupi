// ===================================
// DARA KUPI - JavaScript Functions with Gallery Slider
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Internal Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Cart Icon Click Handler (Placeholder)
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            alert('Fitur keranjang belanja akan segera hadir! 🛒');
        });
    }

    // Add to Cart Buttons (Menu Page)
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuCard = this.closest('.menu-card, .special-card');
            const itemName = menuCard ? menuCard.querySelector('h3').textContent : 'Menu';
            this.textContent = '✓ Ditambahkan';
            this.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                this.textContent = '+ Tambah';
                this.style.backgroundColor = '';
            }, 1500);
            console.log(`Item ditambahkan: ${itemName}`);
        });
    });

    // Order Now Buttons (Special Section)
    const orderButtons = document.querySelectorAll('.btn-small');
    orderButtons.forEach(button => {
        if (button.textContent.includes('Pesan')) {
            button.addEventListener('click', function() {
                const specialCard = this.closest('.special-card');
                const itemName = specialCard ? specialCard.querySelector('h3').textContent : 'Menu';
                alert(`Anda akan memesan: ${itemName}`);
            });
        }
    });

    // Newsletter Form Handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            if (email) {
                alert(`Terima kasih! Email ${email} telah berhasil didaftarkan untuk newsletter kami.`);
                emailInput.value = '';
            }
        });
    }

    // Active Navigation Highlighting (Auto-detect current page)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Scroll Animation for Sections (Optional Enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -90px 0px'
    };
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    // Apply animation to sections
    const animatedSections = document.querySelectorAll('.about-section, .special-section, .menu-section, .store-frame-section');
    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(25px)';
        section.style.transition = 'opacity 0.8s, transform 0.8s';
        sectionObserver.observe(section);
    });

    // ========= SLIDER TOKO =============
    const sliders = document.querySelectorAll('.store-slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.store-slide-item');
        const prevBtn = slider.querySelector('.store-prev');
        const nextBtn = slider.querySelector('.store-next');
        let idx = 0;
        function showSlide(i) {
            slides.forEach((el, n) => el.classList.toggle('active', n === i));
        }
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', function() {
                idx = (idx - 1 + slides.length) % slides.length;
                showSlide(idx);
            });
            nextBtn.addEventListener('click', function() {
                idx = (idx + 1) % slides.length;
                showSlide(idx);
            });
        }
    });

    // Console message for developers
    console.log('🔥 Dara Kupi - Sprint 02 Prototype Loaded Successfully!');
    console.log('📱 Responsive design optimized for Desktop viewing');
    console.log('☕ Enjoy exploring our coffee menu!');
});


// Mobile Menu Toggle (Prepared for future mobile implementation)
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    if (nav) {
        nav.classList.toggle('mobile-active');
    }
}

// Window Resize Handler (For future responsive features)
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
    }, 250);
});
