const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botones = document.getElementById('seleccionar-ataque').getElementsByClassName('botones-ataques')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')

const parrafoEmoji = document.getElementById('emoji')

const sectionMensajes = document.getElementById('resultado')
const spanVidaJugador = document.getElementById('vida-mascota-jugador')
const spanVidaEnemigo = document.getElementById('vida-mascota-enemigo')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const scrollBar = document.getElementById("ataques")

const botonReiniciar = document.getElementById('boton-reiniciar')



let ataqueJugador
let ataqueEnemigo
let vidaRestanteJugador = 3
let vidaRestanteEnemigo = 3

function iniciarJuego(){
    mostrarOcultarSection('seleccionar-ataque','none')
    mostrarOcultarSection('boton-reiniciar','none')

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
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
        agregarImagenMascota('./assets/mokepons_mokepon_hipodoge_attack.png','vida-e-imagen-mascota-jugador')
    }else if(inputCapipepo.checked) {
        agregarImagenMascota('./assets/mokepons_mokepon_capipepo_attack.png','vida-e-imagen-mascota-jugador')
    }else if(inputRatigueya.checked) {
        agregarImagenMascota('./assets/mokepons_mokepon_ratigueya_attack.png','vida-e-imagen-mascota-jugador')
    }else{
        buttonChecked = false
        alert('Selecciona una mascota')
    }
    if(buttonChecked == true){
        mostrarOcultarSection('seleccionar-ataque','flex')
        mostrarOcultarSection('seleccionar-mascota','none')
        seleccionarMascotaEnemigo()
    }
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)

    if(mascotaAleatorio==1){
        agregarImagenMascota('./assets/mokepons_mokepon_hipodoge_attack.png','vida-e-imagen-mascota-enemigo')
    }else if(mascotaAleatorio==2){
        agregarImagenMascota('./assets/mokepons_mokepon_capipepo_attack.png','vida-e-imagen-mascota-enemigo')
    }else if(mascotaAleatorio==3){
        agregarImagenMascota('./assets/mokepons_mokepon_ratigueya_attack.png','vida-e-imagen-mascota-enemigo')
    }
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
    }
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)