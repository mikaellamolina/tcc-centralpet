<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.topbar');
    const navLinks = document.querySelectorAll('.nav-links .nav-item');
    const sections = document.querySelectorAll('.main-sections section');

    // --- 1. EFEITO DE SOMBRA/ELEVAÇÃO NO CABEÇALHO AO ROLAR ---
    const handleHeaderScroll = () => {
        if (window.scrollY > 30) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // --- 2. ROLAGEM SUAVE COM DESCONTO DO CABEÇALHO FIXO ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. DESTASQUE AUTOMÁTICO DO MENU (SCROLLSPY COM INTERSECTION OBSERVER) ---
    const observerOptions = {
        root: null,
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idAtual = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${idAtual}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
=======
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.topbar');
    const navLinks = document.querySelectorAll('.nav-links .nav-item');
    const sections = document.querySelectorAll('.main-sections section');

    // --- 1. EFEITO DE SOMBRA/ELEVAÇÃO NO CABEÇALHO AO ROLAR ---
    const handleHeaderScroll = () => {
        if (window.scrollY > 30) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // --- 2. ROLAGEM SUAVE COM DESCONTO DO CABEÇALHO FIXO ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. DESTASQUE AUTOMÁTICO DO MENU (SCROLLSPY COM INTERSECTION OBSERVER) ---
    const observerOptions = {
        root: null,
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idAtual = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${idAtual}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
>>>>>>> 8eec5d50942f85572ec9306c8c0098acdd819b85
});