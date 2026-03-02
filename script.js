document.addEventListener('DOMContentLoaded', () => {
    // Simple mock of Framer Motion's initial animation
    const card = document.querySelector('.card');

    // Trigger animation next frame to ensure CSS has applied
    requestAnimationFrame(() => {
        card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
});
