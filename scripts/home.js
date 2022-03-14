import { personajes } from "./personajes.js"

let titulo = document.querySelector("title")
let escudoCasa=document.getElementById("escudo")
let personaje=document.getElementById("personaje")
let nombre=document.getElementById("name")
let casaPersonaje=document.getElementById("casa")
let botonNuevo=document.querySelector("button")


let personajeElegido= JSON.parse(localStorage.getItem("aleatorio")) // recibimos del local storage el personaje aleatorio

document.addEventListener("DOMContentLoaded",()=>{
    let{id,name,casa,img,escudo}=personajeElegido // objeto con estas características
    titulo.textContent=name
    escudoCasa.setAttribute("src",escudo)
    escudoCasa.setAttribute("alt",name)
    personaje.setAttribute("src",img)
    personaje.setAttribute("alt",name)
    nombre.textContent=name
    casaPersonaje.textContent=casa

})

botonNuevo.addEventListener("click",()=>{
    window.location.href="./home.html"
    let idPersonaje = Math.random() //numero entre 0 y 1 con 16 decimales

    idPersonaje = idPersonaje * 12 //Lo multiplicamos por el valor que queremos (max no incluido)
    idPersonaje = Math.floor(idPersonaje) //Redondeamos el número

    let elemento = personajes.find(item=>item.id==idPersonaje) // se crea array "elemento" con los objetos que encuentre con id=a idPersonaje
    localStorage.setItem("aleatorio", JSON.stringify(elemento)) //enviamos el personaje aleatorio al local storage 
})

