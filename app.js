
// play music 
var music = new Audio ("audio/audio1.mp3");

document.getElementById("STAY-icon").addEventListener('click', () =>{
    if (music.paused || music.currentTime <= 0){
        music.play();
        document.getElementById("STAY-icon").classList.remove('bi-play-circle-fill');
        document.getElementById("STAY-icon").classList.add('bi-pause-circle-fill');
        document.getElementById("wave").classList.add('active1');
    } else {
        music.pause();
        document.getElementById("STAY-icon").classList.add('bi-play-circle-fill');
        document.getElementById("STAY-icon").classList.remove('bi-pause-circle-fill');
        document.getElementById("wave").classList.remove('active1');

    }
});


// time changed for music 
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});




