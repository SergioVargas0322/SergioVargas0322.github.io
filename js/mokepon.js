//Constantes

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

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
let inputLangostelvis
let inputPydos
let inputTucapalma
let mascotaJugador 
let imagenMascotaSeleccionada
let posicionEnX
let posicionEnY
let ancho
let alto
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

//Clases

class Mokepon {
    constructor(nombre,foto,vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
    }
}

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
        seleccionarMascotaEnemigo()
        extraerAtaques(mascotaJugador)
        mostrarOcultarSection('seleccionar-mascota','none')
        mostrarOcultarSection('ver-mapa','flex')
        extraerImagenPosicionTamaño(mascotaJugador)
        //mostrarOcultarSection('seleccionar-ataque','flex')
    }
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0,mokepones.length-1)
    ataquesEnemigo = mokepones[mascotaAleatorio].ataques
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

function extraerImagenPosicionTamaño(mascotaJugador) {
    mokepones.forEach(mokepon => {
        if (mokepon.nombre == mascotaJugador) {
            imagenMascotaSeleccionada = mokepon.foto
            posicionEnX = mokepon.x
            posicionEnY = mokepon.y
            ancho = mokepon.ancho
            alto = mokepon.alto
        }
    });
    mostrarAtaques(ataques)
}

function pintarPersonaje() {
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    let imagen = new Image()
    imagen.src = imagenMascotaSeleccionada
    lienzo.drawImage(
        imagen,
        posicionEnX,
        posicionEnY,
        ancho,
        alto
    )
}

function moverMascota() {
    posicionEnX = posicionEnX + 5
    pintarPersonaje()
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
        ataquesEnemigo.sort(function() { return Math.random() - 0.5 })
    }
    ataqueEnemigo = ataquesEnemigo[0].nombre
    ataquesEnemigo.shift()

    /* if(ataqueAleatorio==1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo = 'AGUA'
    }else if(ataqueAleatorio==3){
        ataqueEnemigo = 'TIERRA'
    } */

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
        habilitarDeshabilitarBotonesAtaques('false')
        mostrarOcultarSection('boton-reiniciar','flex')
    }else if(vidaRestanteJugador == 0){
        sectionMensajes.innerHTML = "Derrota..."
        habilitarDeshabilitarBotonesAtaques('false')
        mostrarOcultarSection('boton-reiniciar','flex')
    }else if(contador == 0){
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