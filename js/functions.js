function update() {
    if (playGame) {
        desenhaTela();
        desenhaTerra();
        dropAlien();
        dropBala();
    }
    if (life < 0 || pause == true) {
        cancelAnimationFrame(animationId);
    }
    else {
        animationId = requestAnimationFrame(update);
    }
}

function dropBala() {
    if (tempoLiberaBala > 4900 && click == true) {
        shortFX.play();
        var balaObj = new Bala();
        balasArray.push(balaObj);
        balasArray[balasArray.length - 1].setDirecao(eventoClick);
        tempoLiberaBala = 0;
        click = false;
    }

    tempoLiberaBala += 100;
    balasArray.forEach(bala => {
        bala.desenhaBala();
        bala.movimentaBala();
        if (bala.posAtualX < -10 || bala.posAtualY < -10) {
            var indiceBala = balasArray.indexOf(bala);
            balasArray.splice(indiceBala, 1);
        }
    })
}

function dropAlien() {
    if (tempoLiberaAlien > 20000) {
        var alienObj = new Alien();
        alienArray.push(alienObj);
        tempoLiberaAlien = 0;
    }

    tempoLiberaAlien += 100;

    alienArray.forEach(alien => {
        alien.desenhaAlien();
        alien.movimentaAlien();
        balasArray.forEach(bala => {
            if (bala.posAtualX > alien.posAlienX && bala.posAtualX < alien.posAlienX + 20 && bala.posAtualY > alien.posAlienY && bala.posAtualY < alien.posAlienY + 20) {
                score += 1;
                scoreElement.innerText = score;
                var indiceAlien = alienArray.indexOf(alien);
                var indicebala2 = balasArray.indexOf(bala);
                alienArray.splice(indiceAlien, 1);
                balasArray.splice(indicebala2, 1);
            }
        })
        if (alien.posAlienY > canvasHeight - 20) {
            var indiceAlien = alienArray.indexOf(alien);
            alienArray.splice(indiceAlien, 1);
            life -= 1;
            if (life == -1) {
                lifeElement.innerText = life + 1;
            }
            else {
                lifeElement.innerText = life;
            }
            if (life < 0) {
                gameOver();
            }

        }
    })
}

function desenhaTela() {
    cx.beginPath();
    cx.drawImage(imagemCeu, 0, 0);
}

function desenhaTerra() {
    const imagemTerra = new Image();
    imagemTerra.src = 'img/terra1.png';
    cx.drawImage(imagemTerra, (canvasWidth / 2) - 40, canvasHeight - 40);
}

function gameOver() {
    audioMain.pause();
    loseFX.play();
    playGame = false;
    topBar.children[1].classList.add('game-over');
    topBar.children[1].innerHTML = '<p>GAME OVER</p>';
}

function restart() {
    pause = true;
    audioMain.pause();
    alienArray = [];
    balasArray = [];
    eventoClick;
    click = false;
    audioligado = true;
    score = 0;
    life = 3;
    scoreElement.innerText = score;
    lifeElement.innerText = life;
    topBar.children[1].classList.remove('game-over');
    topBar.children[1].innerHTML = '';
    play.removeAttribute('style', 'display: none;');
}