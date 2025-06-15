// Met à jour automatiquement l'année dans le footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling pour tous les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});