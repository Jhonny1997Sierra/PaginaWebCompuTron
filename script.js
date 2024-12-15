const botonesComprar = document.querySelectorAll('.boton-comprar');
const botonesCancelar = document.querySelectorAll('.boton-cancelar');
const botonesEnviar = document.querySelectorAll('.boton-enviar');

botonesComprar.forEach((boton) => {
    boton.addEventListener('click', () => {
        const formulario = boton.parentNode.querySelector('.formulario-compra');
        formulario.style.display = 'block';
    });
});

botonesCancelar.forEach((boton) => {
    boton.addEventListener('click', () => {
        const formulario = boton.parentNode;
        formulario.style.display = 'none';
    });
});

botonesEnviar.forEach((boton) => {
    boton.addEventListener('click', () => {
        alert('CompuTron agradece su compra. En breve nos pondremos en contacto.');
        const formulario = boton.parentNode;
        formulario.style.display = 'none';
    });
});