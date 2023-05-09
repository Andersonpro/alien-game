const volumeImg = document.querySelector('.volume-img');
const play = document.querySelector('.play');
const shortFX = document.querySelector('.short-fx');
const loseFX = document.querySelector('.lose-fx');
const audioMain = document.querySelector('.main-music');
const scoreElement = document.querySelector('.score-value');
const lifeElement = document.querySelector('.life-value');
const topBar = document.querySelector('.top-bar');
const canvas = document.querySelector('canvas');
const botaoRestart = document.querySelector('.button-restart');
const cx = canvas.getContext('2d');

const canvasWidth = 400;
const canvasHeight = 500;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var imagemCeu = new Image();
imagemCeu.src = 'img/fundo.png'

var tempoLiberaAlien = 25000;
let alienArray = [];

var balasArray = [];
var tempoLiberaBala = 5000;
var eventoClick;
var click = false;

var playGame = false;

var animationId;
play.addEventListener('click', ()=> {
    playGame = true;
    play.setAttribute('style', 'display: none;');
    audioMain.loop = true;
    audioMain.play();
    pause = false;
    animationId = requestAnimationFrame(update);
})
canvas.addEventListener('click', (evento) => {
    eventoClick = evento;
    click = true;
})

var audioligado = true;

volumeImg.addEventListener('click', ()=> {
    if(playGame && !pause){
        if(audioligado){
            volumeImg.src = 'img/volume-off.svg';
            audioligado = false;
            audioMain.pause();
        }
        else{
            volumeImg.src = 'img/volume-up.svg';
            audioligado = true;
            audioMain.play();
        }
    }
    
})

botaoRestart.addEventListener('click', restart)

var score = 0;
var life = 3;
var pause = false;

//botao play/pause
//colocar game over no centro
//colocar coracoes na life
//colocar nome do game na barra superior
//deixar canvas responsivo
//adicionar som quando destrói alien
//falta organizar
//falta adicionar as cores a variáveis