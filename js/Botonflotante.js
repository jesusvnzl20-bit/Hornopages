
  // ============================================
  // BOTÓN FLOTANTE PARA SUBIR AL INICIO
  // ============================================
  
  document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    // Mostrar/ocultar el botón según la posición del scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) { // Mostrar después de 300px de scroll
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });
    
    // Función para subir al inicio suavemente
    scrollToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Animación suave de scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Versión alternativa para navegadores antiguos
    function scrollToTopSmooth() {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTopSmooth);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    }
    
    // Usar animación suave si está disponible, sino usar la alternativa
    scrollToTopBtn.addEventListener('click', function() {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        scrollToTopSmooth();
      }
    });
  });
