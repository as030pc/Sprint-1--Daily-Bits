

//Declaracion de variables

let paginaInicial = document.querySelector('.pagina-inicio')
let seccionInicioSesion =document.querySelector('.inicio-sesion')
let seccionRegistro = document.querySelector('.sesion-registro')
let seccionPerfil = document.querySelector('.modulo-perfil')
let seccionMenuPractica = document.querySelector('.menu-practica')
let seccionEstadisticas = document.querySelector('.modulo-estadisticas')
let seccionPreguntaTipoSelect = document.querySelector('.PreguntaTipoSelect')
let seccionPreguntaOrden = document.querySelector('.PreguntaTipoOrden')
let seccionPreguntaTipoImagen = document.querySelector('.PreguntaTipoImagen')
let inscribirse = document.querySelector('.inscribirse')
let btnRegistrarse = document.querySelector('.boton-registrarse')
let btnIngresar = document.querySelector('.boton-ingresar')


let btnHome = document.querySelector('.menu-home')
let btnEstadisticas = document.querySelector('.menu-estadisticas')
let btnPerfil = document.querySelector('.menu-perfil')
let btnComprobar1 = document.querySelector('.comprobar-respuesta-seleccion')
let btnComprobar2 = document.querySelector('.comprobar-respuesta-imagen')
let btnComprobar3 = document.querySelector('.comprobar-respuesta-orden')
//Evento de Inicio
window.addEventListener('DOMContentLoaded', () => {
    seccionRegistro.classList.toggle('remover')
    seccionInicioSesion.classList.toggle('remover')
    seccionPerfil.classList.toggle('remover')
    seccionMenuPractica.classList.toggle('remover')
    seccionEstadisticas.classList.toggle('remover')
    seccionPreguntaTipoSelect.classList.toggle('remover')
    seccionPreguntaTipoImagen.classList.toggle('remover')
    seccionPreguntaOrden.classList.toggle('remover')
})


paginaInicial.addEventListener('click', ()=> {
    paginaInicial.classList.toggle('remover')
    seccionInicioSesion.classList.toggle('remover')
})

//Evento del boton inscribirse
inscribirse.addEventListener('click', (e)=>{
    e.preventDefault
    seccionInicioSesion.classList.toggle('remover')
    seccionRegistro.classList.toggle('remover')
})


//Barra de navegacion de Estadisticas, perfil y Home
btnHome.addEventListener('click', ()=>{
    //seccionMenuPractica.classList.toggle('remover')
    btnEstadisticas.addEventListener('click', ()=>{
        seccionMenuPractica.classList.toggle('remover')
        seccionEstadisticas.classList.toggle('remover')
        seccionMenuPractica.classList.toggle('remover')
    })
    btnPerfil.addEventListener('click', ()=>{
        seccionMenuPractica.classList.toggle('remover')
        seccionPerfil.classList.toggle('remover')
        seccionMenuPractica.classList.toggle('remover')
    })
})






//Preguntas HTML

let btnPreguntasHTML = document.querySelector('.opcion-html')
import {preguntasHTML} from "./modulos/preguntas.js"
console.log(preguntasHTML)
console.log(preguntasHTML.length)
let indiceAleatorio = 0
let acumuladorPreguntas = []

        //comprobacion de preguntas
        

btnPreguntasHTML.addEventListener('click', ()=>{
    indiceAleatorio = Math.floor(Math.random()*(preguntasHTML.length))
    const preguntaActual = preguntasHTML[indiceAleatorio]
    if (preguntaActual["tipo-pregunta"] == "select" ) {
        acumuladorPreguntas.push(indiceAleatorio)
        seccionMenuPractica.classList.toggle('remover')
        seccionPreguntaTipoSelect.classList.toggle('remover')
        const { pregunta, respuestas} = preguntaActual
        seccionPreguntaTipoSelect.querySelector('.pregunta-seleccion').textContent = pregunta;
        for (let i = 0; i<3;i++) {
            seccionPreguntaTipoSelect.querySelector(`.respuesta${i+1}-select`).setAttribute('id',respuestas[i])
            seccionPreguntaTipoSelect.querySelector(`.respuesta${i+1}-select`).textContent = respuestas[i];
        } 
        
    } else if (preguntaActual["tipo-pregunta"] == "orden") {
        acumuladorPreguntas.push(indiceAleatorio)
        seccionPreguntaOrden.classList.toggle('remover')
        seccionMenuPractica.classList.toggle('remover')
        const { pregunta, respuestas} = preguntaActual
        for (let i = 0; i<4;i++) {
            seccionPreguntaOrden.querySelector(`.respuesta-desorden${i+1}`).setAttribute('src',respuestas[i])
        }
        
    } else {  
        acumuladorPreguntas.push(indiceAleatorio)
        seccionPreguntaTipoImagen.classList.toggle('remover')
        const { pregunta, respuestas} = preguntaActual
        seccionPreguntaTipoImagen.querySelector('.pregunta-imagen').textContent = pregunta;
        for (let i = 0; i<4;i++) {
            seccionPreguntaTipoImagen.querySelector(`.respuesta${i}`).setAttribute('src',respuestas[i])
            seccionPreguntaTipoImagen.querySelector(`.respuesta${i}`).setAttribute('id',respuestas[i])
        }

        
    }
})
 
function aleatorio() {
    indiceAleatorio = Math.floor(Math.random()*(preguntasHTML.length))
    console.log(indiceAleatorio)
    const preguntaActual = preguntasHTML[indiceAleatorio]

    if (preguntaActual["tipo-pregunta"] == "select") {
        acumuladorPreguntas.push(indiceAleatorio)
        seccionPreguntaTipoSelect.classList.toggle('remover')
        const { pregunta, respuestas} = preguntaActual
        seccionPreguntaTipoSelect.querySelector('.pregunta-seleccion').textContent = pregunta;
        for (let i = 0; i<3;i++) {
            seccionPreguntaTipoSelect.querySelector(`.respuesta${i+1}-select`).setAttribute('id', respuestas[i])
            seccionPreguntaTipoSelect.querySelector(`.respuesta${i+1}-select`).textContent = respuestas[i];
        } 
        
    } else if (preguntaActual["tipo-pregunta"] == "orden") {
        acumuladorPreguntas.push(indiceAleatorio)
        seccionPreguntaOrden.classList.toggle('remover')
        const { pregunta, respuestas} = preguntaActual
        for (let i = 0; i<4;i++) {
            seccionPreguntaOrden.querySelector(`.respuesta-desorden${i+1}`).setAttribute('src',respuestas[i])
        }
        
    } else if (preguntaActual["tipo-pregunta"] == "imagen") {
        let respuesta =""
        let respuesta1 = seccionPreguntaTipoImagen.querySelector('.respuesta0')
        let respuesta2 = seccionPreguntaTipoImagen.querySelector('.respuesta1')
        let respuesta3 = seccionPreguntaTipoImagen.querySelector('.respuesta2')
        let respuesta4 = seccionPreguntaTipoImagen.querySelector('.respuesta3')
        
        acumuladorPreguntas.push(indiceAleatorio)
        seccionPreguntaTipoImagen.classList.toggle('remover')
        const { pregunta, respuestas,respuestaCorrecta} = preguntaActual
        seccionPreguntaTipoImagen.querySelector('.pregunta-imagen').textContent = pregunta;
        let respuetaRight = respuestaCorrecta
        for (let i = 0; i<4;i++) {
            seccionPreguntaTipoImagen.querySelector(`.respuesta${i}`).setAttribute('src',respuestas[i])
            seccionPreguntaTipoImagen.querySelector(`.respuesta${i}`).setAttribute('id',respuestas[i])
        }
        
    }
}

btnComprobar1.addEventListener('click', ()=> {
    //Pregunta tipo select
    seccionPreguntaTipoSelect.classList.toggle('remover')
    seccionPreguntaTipoImagen.classList.toggle('remover')
    seccionPreguntaOrden.classList.toggle('remover')
    aleatorio()
    

    
})

btnComprobar2.addEventListener('click', ()=> {
    //Pregunta tipo orden
    seccionPreguntaTipoSelect.classList.toggle('remover')
    seccionPreguntaTipoImagen.classList.toggle('remover')
    seccionPreguntaOrden.classList.toggle('remover')
    aleatorio()
    
})

btnComprobar3.addEventListener('click', ()=> {
    //Pregunta tipo Imagen
    seccionPreguntaTipoSelect.classList.toggle('remover')
    seccionPreguntaTipoImagen.classList.toggle('remover')
    seccionPreguntaOrden.classList.toggle('remover')
    aleatorio()
    
})



console.log(acumuladorPreguntas)












