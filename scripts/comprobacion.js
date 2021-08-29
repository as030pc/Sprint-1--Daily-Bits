let btnComprobar1 = document.querySelector('.comprobar-respuesta-seleccion')
let btnComprobar2 = document.querySelector('.comprobar-respuesta-imagen')
let btnComprobar3 = document.querySelector('.comprobar-respuesta-orden')
let seccionPreguntaTipoSelect = document.querySelector('.PreguntaTipoSelect')
let seccionPreguntaTipoImagen = document.querySelector('.PreguntaTipoImagen')
let vidas = 4;
let progreso = 0;




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

let respuesta =""
    let respuesta1 = seccionPreguntaTipoImagen.querySelector('.respuesta0')

    respuesta1.addEventListener('click', e=> {
    respuesta = e.target.id
    console.log(respuesta)
    })

btnComprobar2.addEventListener('click', ()=> { 
    


    if(respuesta =="respuesta0") {
        alert('correcta')
        // swal.fire({text:'Correcta',
        // icon:'success'
        // })

    } else {
        alert('incorrecta')
        // swal.fire({text:'Incorrecto',
        // icon:'error'
        // })
    }
    respuesta = ""
    
})



