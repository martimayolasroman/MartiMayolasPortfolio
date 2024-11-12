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

   // Selecciona solo los desplegables principales (los que no están dentro de otros `details`)
   document.querySelectorAll("details").forEach((details) => {
    // Escucha el evento `toggle` solo para los detalles principales
    details.addEventListener("toggle", function () {
        // Solo actúa si el desplegable es un hijo directo de `body` (evita anidados)
        if (details.parentNode.tagName !== "DETAILS" && details.open) {
            document.querySelectorAll("details").forEach((el) => {
                // Cierra los otros detalles principales
                if (el !== details && el.parentNode.tagName !== "DETAILS") {
                    el.open = false;
                }
            });
        }
    });
});

function openTab(event, tabId, element) {
    // Encuentra el contenedor padre más cercano con la clase 'tab-container'
    var tabContainer = element.closest('.tab-container');

    // Oculta todos los contenidos de pestañas dentro de este contenedor
    var tabContents = tabContainer.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Quita la clase 'active' de todos los botones dentro de este contenedor
    var tabButtons = tabContainer.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Muestra la pestaña seleccionada y marca el botón como activo
    tabContainer.querySelector('#' + tabId).classList.add('active');
    element.classList.add('active');
}