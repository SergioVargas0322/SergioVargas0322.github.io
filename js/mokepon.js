//Constantes

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
const srcMapaBackground = './assets/mokemap.png'

const contenedorAtaques = document.getElementById('contenedor-ataques')

const parrafoEmoji = document.getElementById('emoji')

const sectionMensajes = document.getElementById('resultado')
const vidasMascotas = document.getElementsByClassName('parrafos-vidas-mascotas')
const spanVidaJugador = document.getElementById('vida-mascota-jugador')
const spanVidaEnemigo = document.getElementById('vida-mascota-enemigo')
const ataquesMascotas = document.getElementsByClassName('ataques-mascotas')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const imagenMascotaEnemigo = document.getElementById('imagen-mascota-enemigo')
const scrollBar = document.getElementById("ataques")

const botonVolverMapa = document.getElementById('boton-volver-mapa')
const botonReiniciar = document.getElementById('boton-reiniciar')

//Variables

let mokepones = []
let mokeponesEnemigos = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputPydos
let inputTucapalma
let mascotaJugador 
let mascotaJugadorObjeto
let mascotaEnemigo = []
let mascotaEnemigoObjeto
let mascotaEnemigoColisionada
let imagenMascotaSeleccionada
let velocidad
let intervalo
let ataques
let opcionDeAtaques
let botones = []
let botonFuego
let botonAgua
let botonTierra
let contador = 4
let ataqueJugador
let ataquesEnemigo = []
let ataqueEnemigo
let vidaRestanteJugador = 3
let vidaRestanteEnemigo = 3
let lienzo = mapa.getContext("2d")
let mapaBackground = new Image()
let imagenMascota = new Image()

//Clases

class Mokepon {
    constructor(nombre,foto,vida,posicionX = aleatorio(0,520),posicionY = aleatorio(0,320)) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.posicionX = posicionX
        this.posicionY = posicionY
        this.ancho = 60
        this.alto = 60
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        imagenMascota.src = this.foto
        lienzo.drawImage(
            imagenMascota,
            this.posicionX,
            this.posicionY,
            this.ancho,
            this.alto
        )
    }
}

class MokeponEnemigo {
    constructor(nombre,foto,vida,posicionX = aleatorio(0,520),posicionY = aleatorio(0,320)) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.posicionX = posicionX
        this.posicionY = posicionY
        this.ancho = 60
        this.alto = 60
        this.velocidadX = 0
        this.velocidadY = 0
    }
}

//Objetos Mokepones Jugador

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',3)
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',3)
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',3)
let langostelvis = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',3)
let pydos = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',3)
let tucapalma = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',3)

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
langostelvis.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
pydos.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
tucapalma.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,pydos,tucapalma)

//Objetos Mokepones Enemigos

let hipodogeEnemigo = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',3)
let capipepoEnemigo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',3)
let ratigueyaEnemigo = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',3)
let langostelvisEnemigo = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',3)
let pydosEnemigo = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',3)
let tucapalmaEnemigo = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',3)

hipodogeEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
capipepoEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
langostelvisEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
pydosEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)
tucapalmaEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego', clase: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua', clase: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra', clase: 'boton-tierra'},
)

mokeponesEnemigos.push(hipodogeEnemigo,capipepoEnemigo,ratigueyaEnemigo,langostelvisEnemigo,pydosEnemigo,tucapalmaEnemigo)

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
    inputLangostelvis = document.getElementById('Langostelvis')
    inputPydos = document.getElementById('Pydos')
    inputTucapalma = document.getElementById('Tucapalma')
});

//Funciones

function iniciarJuego(){
    mostrarOcultarSection('ver-mapa','none')
    mostrarOcultarSection('seleccionar-ataque','none')
    mostrarOcultarSection('boton-volver-mapa','none')
    mostrarOcultarSection('boton-reiniciar','none')

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonVolverMapa.addEventListener('click',volverMapa)
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
    }else if(inputLangostelvis.checked) {
        agregarImagenMascota(langostelvis.foto,'vida-e-imagen-mascota-jugador')
        mascotaJugador = langostelvis.nombre
    }else if(inputPydos.checked) {
        agregarImagenMascota(pydos.foto,'vida-e-imagen-mascota-jugador')
        mascotaJugador = pydos.nombre
    }else if(inputTucapalma.checked) {
        agregarImagenMascota(tucapalma.foto,'vida-e-imagen-mascota-jugador')
        mascotaJugador = tucapalma.nombre
    }else{
        buttonChecked = false
        alert('Selecciona una mascota')
    }
    if(buttonChecked == true){
        mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
        seleccionarMascotaEnemigo()
        intervalo = setInterval(pintarCanvas,50)
        iniciarMapa()
        mostrarOcultarSection('seleccionar-mascota','none')
        mostrarOcultarSection('ver-mapa','flex')
        //mostrarOcultarSection('seleccionar-ataque','flex')
    }
}

function seleccionarMascotaEnemigo(){
    var mokeponesEnemigosDesordenados = mokeponesEnemigos.sort(function() { return Math.random() - 0.5 })
    for (let i = 0; i <= aleatorio(2,mokeponesEnemigos.length-1); i++) {
        mascotaEnemigo[i] = mokeponesEnemigosDesordenados[i]
        /* ataquesEnemigo[i] = mokeponesEnemigosDesordenados[i].ataques */
        /* agregarImagenMascota(mokeponesEnemigos[mascotaEnemigo].foto,'vida-e-imagen-mascota-enemigo') */
    }
    mascotaEnemigoObjeto = mascotaEnemigo
}

function extraerAtaques() {
    ataques = mascotaJugadorObjeto.ataques
    mostrarAtaques()
}

function obtenerObjetoMascota(mascota) {
    var temp
    mokepones.forEach(mokepon => {
        if (mokepon.nombre == mascota) {
            temp = mokepon
        }
    });
    return temp
}

function iniciarMapa() {
    mapa.width = 600
    mapa.height = 400

    window.addEventListener('keydown',moverMascotaConTeclado)
    window.addEventListener('keyup',detenerMovimientoTeclado)
}

function pintarCanvas() {
    velocidad = 5
    mascotaJugadorObjeto.posicionX = mascotaJugadorObjeto.posicionX + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.posicionY = mascotaJugadorObjeto.posicionY + mascotaJugadorObjeto.velocidadY
    //Se limpia el canvas
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    //Imagen de fondo en el Canvas
    mapaBackground.src = srcMapaBackground
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    for (let i = 0; i <= mascotaEnemigoObjeto.length-1; i++) {
        mascotaEnemigoObjeto[i].pintarMokepon()
    }
    if (mascotaJugadorObjeto.velocidadX != 0 || mascotaJugadorObjeto.velocidadY != 0) {
        revisarColision()
    }
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverMascotaConTeclado(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        default:
            break;
    }
}

function detenerMovimientoTeclado(event) {
    switch (event.key) {
        case 'ArrowUp':
            detenerMovimientoVertical()
            break;
        case 'ArrowLeft':
            detenerMovimientoHorizontal()
            break;
        case 'ArrowDown':
            detenerMovimientoVertical()
            break;
        case 'ArrowRight':
            detenerMovimientoHorizontal()
            break;
        default:
            break;
    }
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function detenerMovimientoHorizontal() {
    mascotaJugadorObjeto.velocidadX = 0
}

function detenerMovimientoVertical() {
    mascotaJugadorObjeto.velocidadY = 0
}

function revisarColision() {
    const arribaMascota=mascotaJugadorObjeto.posicionY
    const abajoMascota=mascotaJugadorObjeto.posicionY + mascotaJugadorObjeto.alto/2
    const derechaMascota=mascotaJugadorObjeto.posicionX + mascotaJugadorObjeto.ancho/2
    const izquierdaMascota=mascotaJugadorObjeto.posicionX

    for (let i = 0; i <= mascotaEnemigoObjeto.length-1; i++) {
        let arribaEnemigo=mascotaEnemigoObjeto[i].posicionY
        let abajoEnemigo=mascotaEnemigoObjeto[i].posicionY + mascotaEnemigoObjeto[i].alto/2
        let derechaEnemigo=mascotaEnemigoObjeto[i].posicionX + mascotaEnemigoObjeto[i].ancho/2
        let izquierdaEnemigo=mascotaEnemigoObjeto[i].posicionX

        if(
            abajoMascota < arribaEnemigo ||
            arribaMascota > abajoEnemigo ||
            derechaMascota < izquierdaEnemigo ||
            izquierdaMascota > derechaEnemigo
            ){
        }else{
            window.removeEventListener('keydown',moverMascotaConTeclado)
            window.removeEventListener('keyup',detenerMovimientoTeclado)
            detenerMovimiento()
            mascotaEnemigoColisionada = mascotaEnemigoObjeto[i]
            extraerAtaques()
            agregarImagenMascota(mascotaEnemigoColisionada.foto,'imagen-mascota-enemigo')
            /* mostrarOcultarSection('ver-mapa','none') */
            mostrarOcultarSection('seleccionar-ataque','flex')
            break
        }
    }
}

function mostrarAtaques() {
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

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent == '🔥') {
                ataqueJugador = '🔥'
                ataqueAleatorioEnemigo()
            }else if (e.target.textContent == '💧') {
                ataqueJugador = '💧'
                ataqueAleatorioEnemigo()
            }else if (e.target.textContent == '🌱') {
                ataqueJugador = '🌱'
                ataqueAleatorioEnemigo()
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

/* function ataqueFuego(){
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
} */

function ataqueAleatorioEnemigo(){
    if (contador == 4) {
        ataquesEnemigo = mascotaEnemigoColisionada.ataques
        ataquesEnemigo.sort(function() { return Math.random() - 0.5 })
    }
    ataqueEnemigo = ataquesEnemigo[0].nombre
    ataquesEnemigo.shift()

    combate()
}

function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE','🥊')
    }else if(ataqueJugador == '🔥' && ataqueEnemigo == '🌱'){
        vidaRestanteEnemigo--
        crearMensaje('GANASTE','🎉')
    }else if(ataqueJugador == '💧' && ataqueEnemigo == '🔥'){
        vidaRestanteEnemigo--
        crearMensaje('GANASTE','🎉')
    }else if(ataqueJugador == '🌱' && ataqueEnemigo == '💧'){
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
        eliminarMokeponEnemigo()
        habilitarDeshabilitarBotonesAtaques('false')
        mostrarOcultarSection('boton-volver-mapa','flex')
    }else if(vidaRestanteJugador == 0){
        sectionMensajes.innerHTML = "Derrota..."
        habilitarDeshabilitarBotonesAtaques('false')
        mostrarOcultarSection('boton-reiniciar','flex')
    }else if(contador == 0){
        if(vidaRestanteEnemigo == vidaRestanteJugador){
            sectionMensajes.innerHTML = "¡Empate!"
            eliminarMokeponEnemigo()
            habilitarDeshabilitarBotonesAtaques('false')
            mostrarOcultarSection('boton-volver-mapa','flex')
        }else if(vidaRestanteEnemigo < vidaRestanteJugador){
            sectionMensajes.innerHTML = "¡Victoria!"
            eliminarMokeponEnemigo()
            habilitarDeshabilitarBotonesAtaques('false')
            mostrarOcultarSection('boton-volver-mapa','flex')
        }else if(vidaRestanteEnemigo > vidaRestanteJugador){
            sectionMensajes.innerHTML = "¡Derrota!"
            habilitarDeshabilitarBotonesAtaques('false')
            mostrarOcultarSection('boton-reiniciar','flex')
        }
    }
}

function eliminarMokeponEnemigo() {
    for (let i = 0; i <= mascotaEnemigoObjeto.length-1; i++) {
        if (mascotaEnemigoObjeto[i].nombre == mascotaEnemigoColisionada.nombre) {
            mascotaEnemigoObjeto.splice(i,1)
        }
    }
}

function volverMapa(){
    mostrarOcultarSection('boton-volver-mapa','none')
    mostrarOcultarSection('boton-reiniciar','none')
    mostrarOcultarSection('seleccionar-ataque','none')
    mostrarOcultarSection('ver-mapa','flex')
    contador = 4
    contenedorAtaques.innerHTML = ''
    ataquesMascotas.innerHTML = ''
    vidasMascotas.innerHTML = ''
    imagenMascotaEnemigo.innerHTML = ''
    document.getElementById('ataques-del-jugador').innerHTML = ''
    document.getElementById('ataques-del-enemigo').innerHTML = ''
    vidaRestanteJugador = 3
    vidaRestanteEnemigo = 3
    document.getElementById('vida-mascota-jugador').innerHTML = vidaRestanteJugador
    document.getElementById('vida-mascota-enemigo').innerHTML = vidaRestanteEnemigo
    document.getElementById('resultado').innerHTML = '¡Suerte!'
    iniciarMapa()
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)