// ✅ MAPSNAPS WEBSITE ANIMATIONS

document.addEventListener("DOMContentLoaded", function() {
    // Dynamically load AOS (Animate On Scroll) for scroll animations
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css';
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    aosScript.onload = () => {
        AOS.init({
            duration: 1000,   // animation speed (ms)
            once: true,       // only animate once per scroll
            easing: 'ease-in-out'
        });
    };
    document.body.appendChild(aosScript);
});
