// Get elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle sidebar
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close sidebar when clicking overlay
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close sidebar when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});
