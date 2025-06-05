// Gestion du thème sombre/clair
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = '🌓';
    }
}

// Vérifier la préférence système au chargement
setTheme(prefersDarkScheme.matches);

// Écouter les changements de préférence système
prefersDarkScheme.addEventListener('change', e => {
    setTheme(e.matches);
});

// Basculer manuellement
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    setTheme(!isDark);
});

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Gestion du formulaire
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Vérification du reCAPTCHA
    const recaptcha = document.getElementById('recaptcha');
    if (!recaptcha.checked) {
        alert('Veuillez vérifier que vous n\'êtes pas un robot.');
        return;
    }
    
    // Récupération des données du formulaire
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Simulation d'envoi (remplacer par un vrai envoi AJAX)
    console.log('Données du formulaire:', data);
    alert('Message envoyé avec succès! (simulation)');
    
    // Réinitialisation du formulaire
    this.reset();
});

// Animation au défilement
const animateElements = document.querySelectorAll('.animate');

function checkScroll() {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Vérifier au chargement
window.addEventListener('load', checkScroll);

// Vérifier au défilement
window.addEventListener('scroll', checkScroll);