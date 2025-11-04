/* ============================================
   MANEJO DEL FORMULARIO DE CONTACTO
   ============================================ */

// Esperamos a que el contenido del HTML esté completamente cargado
// antes de ejecutar nuestro código JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtenemos el formulario de contacto por su ID
    // El método getElementById busca un elemento en el HTML con el ID especificado
    const formulario = document.getElementById('formulario-contacto');
    
    // Verificamos que el formulario existe antes de continuar
    // Esto previene errores si el elemento no se encuentra
    if (formulario) {
        
        // Agregamos un "escuchador" de eventos al formulario
        // Este escuchador espera el evento 'submit' (cuando el usuario envía el formulario)
        formulario.addEventListener('submit', function(evento) {
            
            // Prevenimos el comportamiento por defecto del formulario
            // Normalmente, al enviar un formulario, la página se recarga
            // Con preventDefault(), evitamos esa recarga y manejamos el envío nosotros mismos
            evento.preventDefault();
            
            // Obtenemos los valores de los campos del formulario
            // Los métodos getElementById obtienen cada campo por su ID
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Mostramos en la consola del navegador el mensaje de confirmación
            // Esto permite verificar que el formulario se envió correctamente
            // Para ver la consola: F12 en Chrome/Firefox o clic derecho > Inspeccionar > Consola
            console.log('Formulario enviado correctamente');
            
            // Opcional: Mostrar los datos del formulario en consola para verificación
            // Estos console.log son útiles para depuración y verificar que los datos se capturan bien
            console.log('Datos del formulario:');
            console.log('Nombre:', nombre);
            console.log('Correo:', correo);
            console.log('Mensaje:', mensaje);
            
            // Opcional: Limpiar el formulario después de enviarlo
            // Esto proporciona una mejor experiencia de usuario
            formulario.reset();
            
            // Mostramos una alerta visual al usuario (opcional)
            // Esta es una forma simple de dar feedback, aunque se puede mejorar con diseño personalizado
            alert('¡Mensaje enviado correctamente! Revisa la consola para más detalles.');
            
        });
        
    } else {
        // Si el formulario no se encuentra, mostramos un mensaje de error en consola
        // Esto ayuda a identificar problemas durante el desarrollo
        console.error('No se encontró el formulario de contacto');
    }
    
    /* ============================================
       MANEJO DE PROYECTOS - MOSTRAR/OCULTAR DESCRIPCIÓN
       ============================================ */
    
    // Obtenemos todas las tarjetas de proyecto
    // querySelectorAll busca todos los elementos que coincidan con el selector CSS
    const proyectoCards = document.querySelectorAll('.proyecto-card');
    
    // Iteramos sobre cada tarjeta de proyecto
    // forEach ejecuta una función para cada elemento del array
    proyectoCards.forEach(function(card) {
        
        // Obtenemos el elemento de descripción dentro de cada tarjeta
        // querySelector busca el primer elemento que coincida con el selector dentro de la tarjeta
        const descripcion = card.querySelector('.proyecto-descripcion');
        const imagenContainer = card.querySelector('.proyecto-imagen');
        const btnCerrar = card.querySelector('.btn-cerrar');
        
        // Verificamos que todos los elementos existen antes de continuar
        if (descripcion && imagenContainer && btnCerrar) {
            
            // Agregamos un escuchador de eventos de clic a la imagen
            // Cuando el usuario hace clic en la imagen, se ejecuta esta función
            imagenContainer.addEventListener('click', function() {
                // Agregamos la clase 'mostrar' a la descripción
                // Esta clase hace que la descripción sea visible (definida en CSS)
                descripcion.classList.add('mostrar');
            });
            
            // Agregamos un escuchador de eventos de clic al botón cerrar
            // Cuando el usuario hace clic en "Cerrar", ocultamos la descripción
            btnCerrar.addEventListener('click', function(evento) {
                // Prevenimos que el clic se propague a otros elementos
                // Esto evita que al hacer clic en cerrar, se vuelva a abrir la descripción
                evento.stopPropagation();
                
                // Removemos la clase 'mostrar' de la descripción
                // Esto oculta la descripción nuevamente
                descripcion.classList.remove('mostrar');
            });
            
            // También cerramos la descripción si el usuario hace clic fuera de ella
            // pero dentro de la tarjeta de proyecto
            card.addEventListener('click', function(evento) {
                // Verificamos si el clic fue directamente en la tarjeta (no en la imagen ni en la descripción)
                if (evento.target === card) {
                    descripcion.classList.remove('mostrar');
                }
            });
            
        } else {
            // Si algún elemento no se encuentra, mostramos un mensaje de error en consola
            console.error('No se encontraron todos los elementos necesarios en la tarjeta de proyecto');
        }
        
    });
    
});

/* ============================================
   NOTAS ADICIONALES PARA PRINCIPIANTES
   ============================================

   ¿Qué es DOMContentLoaded?
   - Es un evento que se dispara cuando el HTML está completamente cargado
   - Nos asegura que todos los elementos del formulario existan antes de trabajar con ellos
   - Es una buena práctica usar este evento en lugar de colocar el script al final del HTML

   ¿Qué es addEventListener?
   - Es un método que "escucha" eventos que ocurren en elementos HTML
   - En este caso, escuchamos el evento 'submit' del formulario
   - Cuando ocurre el evento, ejecutamos la función que le pasamos como segundo parámetro

   ¿Qué es preventDefault()?
   - Los formularios HTML tienen un comportamiento por defecto: enviar datos y recargar la página
   - preventDefault() detiene ese comportamiento para que podamos manejarlo con JavaScript
   - Esto nos permite mostrar el mensaje en consola sin recargar la página

   ¿Qué es getElementById?
   - Es un método del objeto document que busca un elemento HTML por su atributo id
   - Devuelve el elemento si lo encuentra, o null si no existe
   - Es una forma rápida y directa de acceder a elementos específicos

   ¿Qué es console.log?
   - Es una función que imprime información en la consola del navegador
   - Es muy útil para depuración y verificar que el código funciona correctamente
   - No se muestra al usuario final, solo a desarrolladores que abren las herramientas de desarrollador

   ¿Qué es formulario.reset()?
   - Es un método que restablece todos los campos del formulario a sus valores iniciales (vacíos)
   - Proporciona feedback visual al usuario de que el envío fue exitoso
   - Mejora la experiencia de usuario al limpiar el formulario automáticamente

*/

