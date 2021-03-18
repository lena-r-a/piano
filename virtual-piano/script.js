const piano = document.querySelector('.piano');
const note_btn = document.querySelector('.btn-notes');
const letter_btn = document.querySelector('.btn-letters');
const pianoKeys = document.querySelectorAll('.piano-key');


function removeClass(e) {
    if (e.propertyName !=="transform") {return};
    this.classList.remove('piano-key-active')
    this.classList.remove('piano-key-active-pseudo');
};

function playAudio (e) {
    let key = e.target;
    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
    const note = document.getElementById(key.dataset.note);
    note.currentTyme = 0;
    note.play();
    key.addEventListener('transitionend',removeClass);
};
function stopAudio (e) {
    let key = e.target; 
    const note = document.getElementById(key.dataset.note);
    note.currentTyme = 0;
}

piano.addEventListener('mousedown',playAudio);
piano.addEventListener('mouseup',stopAudio);

window.addEventListener('keydown',function (e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    let key = document.querySelector(`.piano-key[data-key='${e.keyCode}']`);
    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
    if (!audio) return;
    audio.currentTyme=0;
    audio.play();
    
});
window.addEventListener ('keyup', function (e){
    let key = document.querySelector(`.piano-key[data-key='${e.keyCode}']`);
    key.classList.remove('piano-key-active-pseudo');
    key.classList.remove('piano-key-active');  
})


note_btn.onclick = function () {
    console.log(pianoKeys);
    if (letter_btn.classList.contains('btn-active')) {
        letter_btn.classList.remove('btn-active');
        this.classList.add('btn-active');
        pianoKeys.forEach((el) => {
            if(el.classList.contains('letter')) {
                el.classList.remove('letter');
            }
          });
    }
};
letter_btn.onclick = function () {
    if (note_btn.classList.contains('btn-active')) {
        note_btn.classList.remove('btn-active');
        this.classList.add('btn-active');
        pianoKeys.forEach((el) => {
            if(!el.classList.contains('letter')) {
                el.classList.add('letter');
            }
          });
        
    }
};
