// document.querySelector(".menu-toggle").addEventListener("click", function () {
//     document.querySelector(".nav").classList.toggle("nav--open");
//   });
document.addEventListener("DOMContentLoaded", () => {
    // Menú responsivo
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav__list");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("nav__list--active");
    });

    // Formulario de contacto
    const contactForm = document.querySelector(".contact__form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensaje enviado correctamente");
            contactForm.reset();
        });
    }
});


