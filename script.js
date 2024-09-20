
document.addEventListener('DOMContentLoaded', function() {
    gsap.from('header', { duration: 1, y: '-100%', ease: 'bounce' });
    gsap.from('#education', { duration: 1.5, opacity: 0, delay: 0.5 });
    gsap.from('#experience', { duration: 1.5, opacity: 0, delay: 1 });
    gsap.from('#projects', { duration: 1.5, opacity: 0, delay: 1.5 });
    gsap.from('#skills', { duration: 1.5, opacity: 0, delay: 2 });
    gsap.from('#personal', { duration: 1.5, opacity: 0, delay: 2.5 });
});
