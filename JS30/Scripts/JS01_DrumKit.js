window.addEventListener('keydown', playSound)
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// window.addEventListener('keyup', function (e) {
//     const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
//     key.classList.remove('playing');
// })

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing')
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0; //重播
    audio.play();
    key.classList.add('playing');
}