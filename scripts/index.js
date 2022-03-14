import { personajes } from "./personajes.js";

let botonComenzar = document.querySelector("button")

botonComenzar.addEventListener("click", (e) => {
    window.location.href = "./pages/home.html"

    let idPersonaje = Math.random() //numero entre 0 y 1 con 16 decimales

    idPersonaje = idPersonaje * 12 //Lo multiplicamos por el valor que queremos (max no incluido)
    idPersonaje = Math.floor(idPersonaje) //Redondeamos el número

    let elemento = personajes.find(item=>item.id==idPersonaje) // se crea array "elemento" con los objetos que encuentre con id=a idPersonaje
    localStorage.setItem("aleatorio", JSON.stringify(elemento)) //enviamos el personaje aleatorio al local storage 
})



