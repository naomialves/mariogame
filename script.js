const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const restartBtn = document.getElementById('restart-btn');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    
     console.log('loop');


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'img/game-over.png';
    mario.style.width = '70px';
    mario.style.marginLeft = '50px';
    clearInterval(loop);

     restartBtn.style.display = 'block';
}

},10) 

// Reiniciar o jogo
restartBtn.addEventListener('click', () => {
    location.reload();
});

document.addEventListener('keydown', jump);

