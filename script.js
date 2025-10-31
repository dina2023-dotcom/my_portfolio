document.addEventListener("DOMContentLoaded", function () {
    
    /* -------------------------------------- */
    /* 1. LOGIQUE DU MENU MOBILE (HAMBURGER)  */
    /* -------------------------------------- */
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const allLinks = document.querySelectorAll('.nav-links a');
    
    // Fonction pour fermer le menu
    function closeMenu() {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    }

    // A. Toggle le menu au clic sur le bouton
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change l'icône de 'bars' (hamburger) à 'times' (X)
            const icon = navToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // B. Ferme le menu quand un lien est cliqué (pour le smooth scrolling)
    allLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // C. Ferme le menu quand on clique en dehors de la navigation
    document.addEventListener('click', function(e) {
        // Vérifie si le menu est ouvert ET si le clic n'est pas sur le menu lui-même ET pas sur le bouton
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !navToggle.contains(e.target) && 
            e.target.closest('.navbar') !== navLinks) {
            
            closeMenu();
        }
    });


    /* -------------------------------------- */
    /* 2. SMOOTH SCROLLING                    */
    /* -------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* -------------------------------------- */
    /* 3. EFFET DE TRANSITION NAVBAR AU SCROLL*/
    /* -------------------------------------- */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            // Un effet d'opacité ou de couleur peut être géré ici si nécessaire
            // Le style initial dans le CSS gère déjà l'opacité et le blur
        });
    }


    /* -------------------------------------- */
    /* 4. LOGIQUE "SEE MORE" DES PROJETS      */
    /* -------------------------------------- */
    document.querySelectorAll('.see-more').forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            const moreText = parent.querySelector('.more-text');
            const dots = parent.querySelector('.dots');
            
            if(moreText && dots){
                if(moreText.style.display === 'none' || moreText.style.display === ''){ 
                    moreText.style.display = 'inline';
                    dots.style.display = 'none';
                    this.textContent = 'See less'; 
                } else { 
                    moreText.style.display = 'none';
                    dots.style.display = 'inline';
                    this.textContent = 'See more'; 
                }
            }
        });
    });

    /* -------------------------------------- */
    /* 5. SCROLL ANIMATION (FADE-IN)          */
    /* -------------------------------------- */
    const elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.95; // Déclenche l'animation plus tôt

        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Exécuter une fois au chargement pour les éléments déjà visibles
});