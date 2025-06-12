// Tryb jasny/ciemny
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

// Ustaw temat na podstawie ustawień przeglądarki lub zapisanych preferencji
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        root.setAttribute('data-theme', 'dark');
    }
})();

// Prosta obsługa formularza kontaktowego (walidacja i info zwrotne)
const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('formResponse');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Prosta walidacja
    if (!name || !email || !message) {
        responseDiv.textContent = "Wypełnij wszystkie pola!";
        responseDiv.style.color = "red";
        return;
    }

    responseDiv.textContent = "Dziękuję za wiadomość! (Formularz jest przykładowy i nie wysyła e-maili)";
    responseDiv.style.color = "green";
    form.reset();
});