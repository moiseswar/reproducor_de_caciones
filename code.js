const playCancion = document.getElementsByClassName('play');
const stopCancion = document.getElementsByClassName('stop');
const volumen = document.querySelector('.volumen');

var audio;
for(element of playCancion){
    element.addEventListener('click', function(){
        let cancion = this.getAttribute('id');
        audio = new Audio(`./Audio/${cancion}.mp3`);
        audio.play();
    })
}

for(element of stopCancion){
    element.addEventListener('click', function(){
        audio.pause();
    })
}

volumen.addEventListener('click', function(){
    let capacity = this.value;
    audio.volume = capacity;
})