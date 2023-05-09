class Alien {
    constructor() {
        this.velAlienY = 1;
        this.posAlienX = Math.random() * (canvasWidth - 20);
        this.posAlienY = -30;
        this.image = new Image();
        this.image.src = 'img/alien-verde.png';
    }

    movimentaAlien() {
        this.posAlienY += this.velAlienY;
    }

    desenhaAlien() {
        cx.drawImage(this.image, this.posAlienX, this.posAlienY);
    }

}

class Bala {
    constructor() {
        this.velocidade = 5;
        this.posInicialBalaX = canvasWidth / 2;
        this.posInicialBalaY = canvasHeight - 40;
        this.posAtualX = canvasWidth / 2;
        this.posAtualY = canvasHeight - 40;
        this.direcaoX = 0;
        this.direcaoY = 0;
        this.imageBala = new Image();
        this.imageBala.src = 'img/bala.png';
    }

    desenhaBala() {
        cx.drawImage(this.imageBala, this.posAtualX, this.posAtualY);
    }

    setDirecao(evento) {
        this.direcaoX = evento.pageX - canvas.offsetLeft - this.posInicialBalaX;
        this.direcaoY = evento.pageY - canvas.offsetTop - this.posInicialBalaY;
        let normaVetor = Math.sqrt(Math.pow(this.direcaoX, 2) + Math.pow(this.direcaoY, 2));
        this.direcaoX = this.direcaoX / normaVetor;
        this.direcaoY = this.direcaoY / normaVetor;
    }

    movimentaBala() {
        this.posAtualX += this.direcaoX * this.velocidade;
        this.posAtualY += this.direcaoY * this.velocidade;
    }

}