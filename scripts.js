// scripts.js

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    alert('Mensaje enviado. ¡Gracias por contactar!');
});


 // Mostrar el botón cuando el usuario ha hecho scroll más de 20px desde la parte superior
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     const scrollTopBtn = document.getElementById("scrollTopBtn");
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         scrollTopBtn.style.display = "block";
     } else {
         scrollTopBtn.style.display = "none";
     }
 }

 // Función para volver al principio de la página
 function scrollToTop() {
     document.body.scrollTop = 0; // Para Safari
     document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
 }