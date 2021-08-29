
let btnComprobar1 = document.querySelector('.comprobar-respuesta-seleccion')
let btnComprobar2 = document.querySelector('.comprobar-respuesta-imagen')
let btnComprobar3 = document.querySelector('.comprobar-respuesta-orden')
let seccionPreguntaTipoSelect = document.querySelector('.PreguntaTipoSelect')
let seccionPreguntaTipoImagen = document.querySelector('.PreguntaTipoImagen')
let vidas = 4;
let progreso = 0;

import {preguntasHTML} from "./modulos/preguntas.js"

const preguntaActual = preguntasHTML[5]
let respuetaCorrecta = preguntaActual["respuestaCorrecta"]

let respuesta =""
let respuesta1 = seccionPreguntaTipoImagen.querySelector('.respuesta0')
let respuesta2 = seccionPreguntaTipoImagen.querySelector('.respuesta1')
let respuesta3 = seccionPreguntaTipoImagen.querySelector('.respuesta2')
let respuesta4 = seccionPreguntaTipoImagen.querySelector('.respuesta3')

    respuesta1.addEventListener('click', e=> {
    respuesta = e.target.id
    })
    respuesta2.addEventListener('click', e=> {
        respuesta = e.target.id
    })
    respuesta3.addEventListener('click', e=> {
        respuesta = e.target.id
    })
    respuesta4.addEventListener('click', e=> {
        respuesta = e.target.id
    })

btnComprobar2.addEventListener('click', ()=> { 
    if(respuesta == respuetaCorrecta) {
        
        Swal.fire({text:'Correcta',
        icon:'success'
        })

    } else {

        vidas -=1
        Swal.fire({text:'Incorrecto',
        icon:'error'
        })
    }
    respuesta = ""
    
})



// btnComprobar1.addEventListener('click', ()=> { 
//     let mensaje = document.createDocumentFragment
//     mensaje.innerHTML = ''
    
//     if (seccionPreguntaTipoSelect.querySelector('.').value == "main") {
//         vidas = 4;
//         progreso = 16.67;
//         mensaje.innerHTML = `<div class="buen-trabajo">
//         <p>Buen trabajo</p>
//         <button>CONTINUAR</button>
//         </div>`
        

//         console.log(seccionPreguntaTipoSelect.querySelector('input').value)
//     } else {
//         vidas -=1
//         mensaje.innerHTML = `<div class="mal-trabajo">
//         <p>Respuesta incorrecta</p>
//         <button>CONTINUAR</button>
//     </div>`
//         console.log(seccionPreguntaTipoSelect.querySelector('input').value)
//     }
// })
