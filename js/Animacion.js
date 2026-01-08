
  // ============================================
  // ANIMACIÓN SIMPLE AL HACER SCROLL TORTAS
  // ============================================
  
  document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las tortas
    const tortas = document.querySelectorAll('.torta-completa');
    
    // Función para verificar si un elemento está en el viewport
    function estaEnViewport(elemento) {
      const rect = elemento.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // El elemento está en el viewport si:
      // - Su parte superior está por encima del 80% de la ventana
      // - Su parte inferior está por debajo del 20% de la ventana
      return (
        rect.top <= windowHeight * 0.8 &&
        rect.bottom >= windowHeight * 0.2
      );
    }
    
    // Función para verificar y animar las tortas
    function verificarTortas() {
      tortas.forEach(torta => {
        if (estaEnViewport(torta)) {
          torta.classList.add('visible');
        }
      });
    }
    
    // Ejecutar al cargar la página
    verificarTortas();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', verificarTortas);
    
    // Ejecutar al cambiar el tamaño de la ventana (responsive)
    window.addEventListener('resize', verificarTortas);
  });
