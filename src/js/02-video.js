import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

let currentTime;

if (!JSON.parse(localStorage.getItem("videoplayer-current-time"))){
    currentTime = 0;
} else {
    currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
}

console.log("currentTime after player.on()", currentTime);

player.setCurrentTime(currentTime);

player.on('play', function(timeupdate) {

    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate));

    currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time")); 
    
    console.log("currentTime inside player.on():", currentTime);
    console.log('played the video!');
});
