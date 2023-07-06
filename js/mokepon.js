//Constantes

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const botonMascotaJugador = document.getElementById('boton-mascota')

const contenedorAtaques = document.getElementById('contenedor-ataques')

const parrafoEmoji = document.getElementById('emoji')

const sectionMensajes = document.getElementById('resultado')
const spanVidaJugador = document.getElementById('vida-mascota-jugador')
const spanVidaEnemigo = document.getElementById('vida-mascota-enemigo')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const scrollBar = document.getElementById("ataques")

const botonReiniciar = document.getElementById('boton-reiniciar')

//Variables

let mokepones = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador 
let opcionDeAtaques
let botones = []
let botonFuego
let botonAgua
let botonTierra
let contador = 4
let ataqueJugador
let ataqueEnemigo
let vidaRestanteJugador = 3
let vidaRestanteEnemigo = 3

//Clases

class Mokepon {
    constructor(nombre,foto,vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',3)
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',3)
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',3)

hipodoge.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
capipepo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)

mokepones.forEach(mokepon => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
});

//Funciones

function iniciarJuego(){
    mostrarOcultarSection('seleccionar-ataque','none')
    mostrarOcultarSection('boton-reiniciar','none')

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function habilitarDeshabilitarBotonesAtaques(logic){
    for (var boton of botones){
        boton.disabled = logic
    }
}

function mostrarOcultarSection(ID,logic){
    let sectionSeleccionarAtaque = document.getElementById(ID)
    sectionSeleccionarAtaque.style.display = logic
}

function agregarImagenMascota(SRC,identificador_id){
    let imagenMascota = document.createElement('img')
    imagenMascota.src = SRC
    var src = document.getElementById(identificador_id)
    src.appendChild(imagenMascota)
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaJugador(){
    let buttonChecked = true

    if(inputHipodoge.checked) {
        agregarImagenMascota(hipodoge.foto,'vida-e-imagen-mascota-jugador')
        mascotaJugador = hipodoge.nombre
    }else if(inputCapipepo.checked) {
        agregarImagenMascota(capipepo.foto,'vida-e-imagen-mascota-jugador')
        mascotaJugador = capipepo.nombre
    }else if(inputRatigueya.checked) {
        agregarImagenMascota(ratigueya.foto,'vida-e-imagen-mascota-jugador')
        mascotaJugador = ratigueya.nombre
    }else{
        buttonChecked = false
        alert('Selecciona una mascota')
    }
    if(buttonChecked == true){
        seleccionarMascotaEnemigo()
        extraerAtaques(mascotaJugador)
        mostrarOcultarSection('seleccionar-mascota','none')
        mostrarOcultarSection('seleccionar-ataque','flex')
    }
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0,mokepones.length-1)

    agregarImagenMascota(mokepones[mascotaAleatorio].foto,'vida-e-imagen-mascota-enemigo')
}

function extraerAtaques(mascotaJugador) {
    mokepones.forEach(mokepon => {
        if (mokepon.nombre == mascotaJugador) {
            ataques = mokepon.ataques
        }
    });
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach(ataque => {
        opcionDeAtaques = `
        <button id=${ataque.id} class="botones-ataques BAtaques">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionDeAtaques
    });
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaques')
    console.log(botones)

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            console.log(e)
            if (e.target.textContent == '🔥') {
                ataqueFuego()
            }else if (e.target.textContent == '💧') {
                ataqueAgua()
            }else if (e.target.textContent == '🌱') {
                ataqueTierra()
            }
            boton.disabled = true
            e.target.style.background = '#3C5E8E';
            contador -= 1
        })
    })
    
    /* botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra) */
}

function secuenciaAtaque (){

}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio==1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo = 'AGUA'
    }else if(ataqueAleatorio==3){
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE','🥊')
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        vidaRestanteEnemigo--
        crearMensaje('GANASTE','🎉')
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        vidaRestanteEnemigo--
        crearMensaje('GANASTE','🎉')
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        vidaRestanteEnemigo--
        crearMensaje('GANASTE','🎉')
    }else {
        vidaRestanteJugador--
        crearMensaje('PERDISTE','😒')
    }
}

function crearMensaje(resultadoBatalla,emoji){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoBatalla
    parrafoEmoji.innerHTML = emoji
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    vidaJugador()
    scrollBar.scrollTop = scrollBar.scrollHeight
}

function vidaJugador(){
    spanVidaJugador.innerHTML = vidaRestanteJugador
    vidaEnemigo()
}

function vidaEnemigo(){
    spanVidaEnemigo.innerHTML = vidaRestanteEnemigo
    mensajeResultadoFinal()
}

function mensajeResultadoFinal(){
    if(vidaRestanteEnemigo == 0) {
        sectionMensajes.innerHTML = "¡Victoria!"
        habilitarDeshabilitarBotonesAtaques('false')
        mostrarOcultarSection('boton-reiniciar','flex')
    }else if(vidaRestanteJugador == 0){
        sectionMensajes.innerHTML = "Derrota..."
        habilitarDeshabilitarBotonesAtaques('false')
        mostrarOcultarSection('boton-reiniciar','flex')
    }else if(contador == 0){
        console.log(contador)
        if(vidaRestanteEnemigo == vidaRestanteJugador){
            sectionMensajes.innerHTML = "¡Empate!"
            habilitarDeshabilitarBotonesAtaques('false')
            mostrarOcultarSection('boton-reiniciar','flex')
        }else if(vidaRestanteEnemigo < vidaRestanteJugador){
            sectionMensajes.innerHTML = "¡Victoria!"
            habilitarDeshabilitarBotonesAtaques('false')
            mostrarOcultarSection('boton-reiniciar','flex')
        }else if(vidaRestanteEnemigo > vidaRestanteJugador){
            sectionMensajes.innerHTML = "¡Derrota!"
            habilitarDeshabilitarBotonesAtaques('false')
            mostrarOcultarSection('boton-reiniciar','flex')
        }
    }
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)