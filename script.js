const revealElements = () => {
    const elementsToReveal = document.querySelectorAll('.reveal, .project-spotlight, .project-card');
    const windowHeight = window.innerHeight;

    elementsToReveal.forEach(element => {
        if (!element.classList.contains('reveal')) {
            element.classList.add('reveal');
        }
        
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150; // Distance in pixels before triggering the animation

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
