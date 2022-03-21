window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});

window.sr = ScrollReveal();
sr.reveal('.section_content_right', {
  duration: 2000,
  origin: 'top'
});

window.sr = ScrollReveal();
sr.reveal('.section_content_left', {
  duration: 2000,
  origin: 'left'
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("enviar").addEventListener("submit", enviarTexto);

function enviarTexto() {
  alert("Para respuesta inmediata, le sugerimos use nuestra linea de Whatsapp. Feliz día");
}
