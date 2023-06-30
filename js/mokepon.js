let ataqueJugador
let ataqueEnemigo
let vidaRestanteJugador = 3
let vidaRestanteEnemigo = 3

function iniciarJuego(){
    ocultarSection('seleccionar-ataque')
    ocultarSection('boton-reiniciar')

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function deshabilitarBotonesAtaques(){
    let botones = document.getElementById('seleccionar-ataque').getElementsByClassName('botones-ataques')
    for (var boton of botones){
        boton.disabled = true
    }
}

function habilitarBotonesAtaques(){
    let botones = document.getElementById('seleccionar-ataque').getElementsByClassName('botones-ataques')
    for (var boton of botones){
        boton.disabled = false
    }
}

function ocultarSection(ID){
    let sectionSeleccionarAtaque = document.getElementById(ID)
    sectionSeleccionarAtaque.style.display = 'none'
}

function mostrarSection(ID){
    let sectionSeleccionarAtaque = document.getElementById(ID)
    sectionSeleccionarAtaque.style.display = 'flex'
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
    if(document.getElementById('hipodoge').checked) {
        agregarImagenMascota('./assets/mokepons_mokepon_hipodoge_attack.png','vida-e-imagen-mascota-jugador')
    }else if(document.getElementById('capipepo').checked) {
        agregarImagenMascota('./assets/mokepons_mokepon_capipepo_attack.png','vida-e-imagen-mascota-jugador')
    }else if(document.getElementById('ratigueya').checked) {
        agregarImagenMascota('./assets/mokepons_mokepon_ratigueya_attack.png','vida-e-imagen-mascota-jugador')
    }else{
        buttonChecked = false
        alert('Selecciona una mascota')
    }
    if(buttonChecked == true){
        mostrarSection('seleccionar-ataque')
        ocultarSection('seleccionar-mascota')
        seleccionarMascotaEnemigo()
    }
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    let sectionMensajes = document.getElementById('resultado')
    let parrafoEmoji = document.getElementById('emoji')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoBatalla
    parrafoEmoji.innerHTML = emoji
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    vidaJugador()
    var element = document.getElementById("ataques")
    element.scrollTop = element.scrollHeight
}

function vidaJugador(){
    let spanVidaJugador = document.getElementById('vida-mascota-jugador')
    spanVidaJugador.innerHTML = vidaRestanteJugador
    vidaEnemigo()
}

function vidaEnemigo(){
    let spanVidaEnemigo = document.getElementById('vida-mascota-enemigo')
    spanVidaEnemigo.innerHTML = vidaRestanteEnemigo
    mensajeResultadoFinal()
}

function mensajeResultadoFinal(){
    if(vidaRestanteEnemigo == 0) {
        let sectionMensajes = document.getElementById('resultado')
        sectionMensajes.innerHTML = "¡Victoria!"
        deshabilitarBotonesAtaques()
        mostrarSection('boton-reiniciar')
    }else if(vidaRestanteJugador == 0){
        let sectionMensajes = document.getElementById('resultado')
        sectionMensajes.innerHTML = "Derrota..."
        deshabilitarBotonesAtaques()
        mostrarSection('boton-reiniciar')
    }
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)