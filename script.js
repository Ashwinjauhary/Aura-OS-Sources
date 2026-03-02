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

// Modal Logic
function showIosInstructions() {
    const modal = document.getElementById('ios-modal');
    modal.classList.remove('hidden');
}

function hideIosInstructions() {
    const modal = document.getElementById('ios-modal');
    modal.classList.add('hidden');
}

// Close modal if clicked outside the card
document.getElementById('ios-modal').addEventListener('click', (e) => {
    if (e.target.id === 'ios-modal') {
        hideIosInstructions();
    }
});
