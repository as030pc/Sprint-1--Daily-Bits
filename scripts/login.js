let formulario = document.querySelector('.formRegistro');
let btnRegistrarse = document.querySelector('.boton-registrarse')
let seccionInicioSesion =document.querySelector('.inicio-sesion')
let seccionMenuPractica = document.querySelector('.menu-practica')
let seccionRegistro = document.querySelector('.sesion-registro')

btnRegistrarse.addEventListener('click', async function registro() {
    let name = document.getElementById('nombreRegistro').value;
    let contrasenia = document.getElementById('contraRegistro').value;
    let email = document.getElementById('correoRegistro').value;
  
    let resp = await fetch('http://localhost:4000/usuarios/',{
        method: 'POST', // Es el metodo de crear, se deben colocar el tipo de metodo el header 
        body: JSON.stringify({  //Que es lo que se va a crear
            nombre: name,
            contrasenia: contrasenia,
            correo: email
        }),             //Se envia el objeto que se va a construir
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }               // se especifica siempre este header
    }) 
   /*  let data = resp.json();
    console.log(data) */
    alert("Registro exitoso")
    seccionRegistro.classList.toggle('remover')
    seccionInicioSesion.classList.toggle('remover')
    
})



let btnIngresar = document.querySelector('.boton-ingresar')
    btnIngresar.addEventListener('click', async (e) => {
    let email = document.getElementById('correoLogin').value;
    let contrasenia = document.getElementById('contraLogin').value;
    let resp = await fetch('http://localhost:4000/usuarios'); //Para ir consultar en la endpoint y consumirla
    let data = await resp.json();
    if(data.some(user => user.correo === email) ) {
        if (data.some(user =>user.contrasenia ==contrasenia)) {
            Swal.fire({text:'Usuario Registrado',
            icon:'success'
            
        })
        e.stopPropagation();
        seccionInicioSesion.classList.toggle('remover')
        seccionMenuPractica.classList.toggle('remover')
        }
         else {
            Swal.fire({text:'Contraseña incorrecta',
            icon:'error'
        })
        
    }
 } else {
        Swal.fire({text:'Intente con otro usuario',
        icon:'warning'
        })
    }
    
})

// btnEditar.addEventListener('click', async() => {
//     let idModificar = document.getElementById('id').value;
//     let nameMod = document.getElementById('name').value;
//     let lastNameMod = document.getElementById('lastName').value;
//     let emailMod = document.getElementById('email').value;
  
//     let resp = await fetch(`http://localhost:4003/usuarios/${idModificar}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: idModificar,
//             nombre: nameMod,
//             apellido: lastNameMod,
//             correo: emailMod
//         }),
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8"
//         }
//     }) 
// /*     let data = resp.json();
//     console.log(data); */
// })

// btnEliminar.addEventListener('click', async() => {

//     let idModificar = document.getElementById('id').value;
//     console.log(idModificar)
//     let resp = await fetch(`http://localhost:4003/usuarios/${idModificar}`,{
//         method: 'DELETE',
//     })
// /*     let data = resp.json();
//     console.log(data); */
// })