// ✅ MAPSNAPS WEBSITE ANIMATIONS + FUTURE FX

document.addEventListener("DOMContentLoaded", function() {
    // Load AOS (Animate On Scroll) library dynamically
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

    // Future space: add parallax or hero animations here if needed
});
