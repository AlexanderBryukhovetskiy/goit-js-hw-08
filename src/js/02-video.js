import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

let currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

if (!currentTime){
    currentTime = 0;
} 
player.setCurrentTime(currentTime.seconds);


player.on('play', function(timeupdate) {

    console.log("currentTime before player.on()", currentTime);

    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate));

    currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time")); 
    
    console.log("currentTime inside player.on():", JSON.parse(localStorage.getItem("videoplayer-current-time")));

    console.log('played the video!');
});
