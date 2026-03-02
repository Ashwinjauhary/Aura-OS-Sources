document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Navbar Scroll Effect
    // ----------------------------------------------------
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ----------------------------------------------------
    // Mobile Navigation Toggle
    // ----------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // ----------------------------------------------------
    // Intersection Observer for Scroll Animations
    // ----------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible so it doesn't animate out and in again
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.observer-target');
    animatedElements.forEach(el => observer.observe(el));
});

// ----------------------------------------------------
// iOS Modal Logic
// ----------------------------------------------------
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
