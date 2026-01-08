   // ============================================
    // CONFIGURACIÓN DEL NÚMERO DE WHATSAPP
    // ============================================
    const WHATSAPP_NUMBER = '584262971010'; 
    
    // ============================================
    // EVENTO: ENVÍO DEL FORMULARIO
    // Se ejecuta cuando el usuario hace clic en "Enviar por WhatsApp"
    // ============================================
    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
      // Prevenir el comportamiento por defecto del formulario (no recargar la página)
      e.preventDefault();
      
      // Obtener los valores ingresados por el usuario
      const nombre = document.getElementById('nombre').value;
      const mensaje = document.getElementById('mensaje').value;
      
      // ============================================
      // CONSTRUCCIÓN DEL MENSAJE
      // ============================================
      const mensajeCompleto = `Hola, soy *${nombre}*%0A%0A${encodeURIComponent(mensaje)}`;
      
      // Construir la URL de WhatsApp Web/App con el mensaje prellenado
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCompleto}`;
      
      // ============================================
      // CERRAR EL MODAL
      // ============================================
      $('#whatsappModal').modal('hide');
      
      // ============================================
      // LIMPIAR ELEMENTOS RESIDUALES DEL MODAL
      // ============================================
      setTimeout(function() {
        $('.modal-backdrop').remove(); // Eliminar el fondo oscuro
        $('body').removeClass('modal-open').css('padding-right', ''); // Restaurar scroll
      }, 300); // Espera 300ms para que la animación de cierre termine
      
      // ============================================
      // ABRIR WHATSAPP
      // Abre WhatsApp en una nueva pestaña con el mensaje prellenado
      // ============================================
      setTimeout(function() {
        window.open(whatsappURL, '_blank'); // '_blank' = nueva pestaña
      }, 500); // Espera 500ms para que el modal se cierre completamente
      
      // ============================================
      // LIMPIAR EL FORMULARIO
      // Borra los campos del formulario para el próximo uso
      // ============================================
      this.reset();
    });

 
