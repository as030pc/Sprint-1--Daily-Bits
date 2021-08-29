let btnComprobar1 = document.querySelector('.comprobar-respuesta-seleccion')
let btnComprobar2 = document.querySelector('.comprobar-respuesta-imagen')
let btnComprobar3 = document.querySelector('.comprobar-respuesta-orden')
let seccionPreguntaTipoSelect = document.querySelector('.PreguntaTipoSelect')
btnComprobar1.addEventListener('click', ()=> { 
    let mensaje = document.createElement('div')
    mensaje.innerHTML = ''
    if (seccionPreguntaTipoSelect.querySelector('input').value == "main") {
        mensaje.innerHTML = `<div class="buen-trabajo">
        <p>Buen trabajo</p>
        <button>CONTINUAR</button>
    </div>`
        

        console.log(seccionPreguntaTipoSelect.querySelector('input').value)
    } else {
        mensaje.innerHTML = `<div class="mal-trabajo">
        <p>Respuesta incorrecta</p>
        <button>CONTINUAR</button>
    </div>`
        console.log(seccionPreguntaTipoSelect.querySelector('input').value)
    }
})