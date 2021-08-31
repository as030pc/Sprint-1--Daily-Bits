
let btnComprobar1 = document.querySelector('.comprobar-respuesta-seleccion')
let btnComprobar3 = document.querySelector('.comprobar-respuesta-imagen')
let btnComprobar2 = document.querySelector('.comprobar-respuesta-orden')
let seccionPreguntaTipoSelect = document.querySelector('.PreguntaTipoSelect')
let seccionPreguntaTipoImagen = document.querySelector('.PreguntaTipoImagen')
let vidas = 4;
let progreso = 0;

let respuestasBuenas = 0
let respuestasMalas = 0

import {preguntasHTML} from "./modulos/preguntas.js"


function comprobarPreguntaImagen(tipoPregunta ) {
    let preguntasContestadas = 0
    let preguntaActual = preguntasHTML[tipoPregunta]
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

    btnComprobar3.addEventListener('click', ()=> { 
        if(respuesta == respuetaCorrecta) {
            progreso +=16.67;
            preguntasContestadas = preguntasContestadas+1
            respuestasBuenas += 1
            Swal.fire({text:'Correcta',
            icon:'success'
            })

        } else {

            vidas -=1
            progreso +=16.67;
            preguntasContestadas += 1
            respuestasMalas += 1
        
            Swal.fire({text:'Incorrecto',
            icon:'error'
            })
        }
        respuesta = ""
        
    })
}
comprobarPreguntaImagen(5)
comprobarPreguntaImagen(4)

function comprobarPreguntaSelect(indicePregunta) {
    let preguntasContestadas = 0
    let preguntaActual = preguntasHTML[indicePregunta]
    let respuetaCorrecta = preguntaActual["respuestaCorrecta"]
    let respuesta =""
    let respuesta1 = seccionPreguntaTipoSelect .querySelector('.respuesta1-select')
    let respuesta2 = seccionPreguntaTipoSelect .querySelector('.respuesta2-select')
    let respuesta3 = seccionPreguntaTipoSelect .querySelector('.respuesta3-select')
    
        respuesta1.addEventListener('click', e=> {
        respuesta = e.target.id
        })
        respuesta2.addEventListener('click', e=> {
            respuesta = e.target.id
        })
        respuesta3.addEventListener('click', e=> {
            respuesta = e.target.id
        })
        

    btnComprobar1.addEventListener('click', ()=> { 
        if(respuesta == respuetaCorrecta) {
            progreso +=16.67;
            preguntasContestadas = preguntasContestadas+1
            respuestasBuenas += 1
            Swal.fire({text:'Correcta',
            icon:'success'
            })

        } else {
            progreso +=16.67;
            preguntasContestadas = preguntasContestadas+1
            respuestasMalas+= 1
            vidas -=1
            Swal.fire({text:'Incorrecto',
            icon:'error'
            })
        }
        respuesta = ""
        
    })
    console.log(preguntasContestadas)
}

comprobarPreguntaSelect(0)
comprobarPreguntaSelect(1)












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
