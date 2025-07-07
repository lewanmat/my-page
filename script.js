// Light/Dark Mode
const toggleThemeBtn = document.getElementById('toggleTheme');
const root = document.documentElement;

toggleThemeBtn.addEventListener('click', () => {
    if (root.getAttribute('data-theme') === 'dark') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Set theme based on browser settings or saved preferences
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        root.setAttribute('data-theme', 'dark');
    }
})();
