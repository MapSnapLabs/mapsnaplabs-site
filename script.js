// MAPSNAPS WEBSITE ANIMATIONS

// ✅ Load AOS (Animate On Scroll) for smooth scroll-based animations
document.addEventListener("DOMContentLoaded", function() {
    // Dynamically load AOS library
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css';
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    aosScript.onload = () => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    };
    document.body.appendChild(aosScript);
});

// ✅ Smooth scroll for internal links (e.g. Get Notified → Download section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});