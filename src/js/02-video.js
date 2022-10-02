import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate (parameters) {
    
    localStorage.setItem("videoplayer-current-time", parameters.seconds);

    console.log('played the video!', JSON.parse(localStorage.getItem("videoplayer-current-time")));
};