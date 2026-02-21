document.addEventListener('DOMContentLoaded', () => {
    // Language Persistence
    const langToggle = document.getElementById('langToggle');
    const body = document.body;

    const savedLang = localStorage.getItem('serenity_lang') || 'lang-en';
    body.classList.remove('lang-en', 'lang-ar');
    body.classList.add(savedLang);

    if (langToggle) {
        langToggle.textContent = savedLang === 'lang-en' ? 'عربي' : 'English';
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const isEn = body.classList.contains('lang-en');
            const newLang = isEn ? 'lang-ar' : 'lang-en';

            body.classList.remove('lang-en', 'lang-ar');
            body.classList.add(newLang);
            langToggle.textContent = isEn ? 'English' : 'عربي';
            localStorage.setItem('serenity_lang', newLang);

            body.style.opacity = 0;
            setTimeout(() => {
                body.style.transition = 'opacity 0.4s ease-in-out';
                body.style.opacity = 1;
            }, 100);
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Parallax
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const mesh = document.querySelector('.background-mesh');
        if (mesh) mesh.style.transform = `translateY(${scrollY * 0.2}px)`;
    });

    // Buttons effect
    const buttons = document.querySelectorAll('.glass-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            if (!this.classList.contains('lang-toggle') && !this.classList.contains('add-to-cart-card')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-2px)';
                }, 150);
            }
        });
    });
});
