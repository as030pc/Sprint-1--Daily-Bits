let paginaInicial = document.querySelector('.pagina-inicio')
let seccionInicioSesion =document.querySelector('.inicio-sesion')
let seccionRegistro = document.querySelector('.sesion-registro')
let seccionPerfil = document.querySelector('.modulo-perfil')
let seccionMenuPractica = document.querySelector('.menu-practica')
let seccionEstadisticas = document.querySelector('.modulo-estadisticas')
let seccionPreguntaTipoSelect = document.querySelector('.PreguntaTipo1')
let seccionPreguntaOrden = document.querySelector('.PreguntaTipoOrden')
let seccionPreguntaTipoImagen = document.querySelector('.PreguntaTipoImagen')
let inscribirse = document.querySelector('.inscribirse')
let btnRegistrarse = document.querySelector('.boton-registrarse')
let btnIngresar = document.querySelector('.boton-ingresar')

let btnHome = document.querySelector('.menu-home')
let btnEstadisticas = document.querySelector('.menu-estadisticas')
let btnPerfil = document.querySelector('.menu-perfil')

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

inscribirse.addEventListener('click', (e)=>{
    e.preventDefault
    seccionInicioSesion.classList.toggle('remover')
    seccionRegistro.classList.toggle('remover')
})

btnRegistrarse.addEventListener('click', ()=>{
    seccionRegistro.classList.toggle('remover')
    seccionInicioSesion.classList.toggle('remover')
})

btnIngresar.addEventListener('click', (e)=>{
    e.stopPropagation();
    seccionInicioSesion.classList.toggle('remover')
    seccionMenuPractica.classList.toggle('remover')
    
})


//Barra de navegacion de Estadisticas, perfil y Home
btnHome.addEventListener('click', ()=>{
    // seccionMenuPractica.classList.toggle('remover')
    
})

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


//Preguntas





