/*=========================================
HIDRIA FISIOTERAPIA ACUÁTICA
script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
    Navbar al hacer scroll
    ==============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scroll");

        } else {

            header.classList.remove("scroll");

        }

    });

    /*==============================
    Animación de aparición
    ==============================*/

    const elements = document.querySelectorAll(
        ".card, .presentation-box, .about-image, .about-content, .social-icons a"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    /*==============================
    Botón WhatsApp
    ==============================*/

    const whatsapp = document.querySelector(".whatsapp");

    whatsapp.addEventListener("mouseenter", () => {

        whatsapp.style.transform = "scale(1.15)";

    });

    whatsapp.addEventListener("mouseleave", () => {

        whatsapp.style.transform = "scale(1)";

    });

});
