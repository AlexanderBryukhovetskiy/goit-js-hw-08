import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

//-------- debug -----------
// так не працює запис взагалі:
// player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds || 0);
// console.log(JSON.parse(localStorage.getItem("videoplayer-current-time")));


// так теж не працює - запису у сховищі не відбувається
// player.setCurrentTime(localStorage.getItem("videoplayer-current-time").seconds || 0); 
// console.log(localStorage.getItem("videoplayer-current-time").seconds);


//так запис є, але при перезавантаженні сторінки видає помилку у консолі і відео починається спочатку:
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);
console.log(localStorage.getItem("videoplayer-current-time"));

player.on('timeupdate', function(timeupdate) {

        console.log("currentTime before save in player.on()", localStorage.getItem("videoplayer-current-time"));

    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate));// це не змінювати -> запис у сховище

        console.log("saved currentTime in player.on():", localStorage.getItem("videoplayer-current-time"));

        console.log('played the video!');
});

//---------------------------------------------------------------





//------------------ old code ------------------------------------
// let currentTime;

// // if (!JSON.parse(localStorage.getItem("videoplayer-current-time"))){
// //     currentTime = 0;
// // } else {
// //     currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
// // }


// if (!localStorage.getItem("videoplayer-current-time")){
//     currentTime = 0;
// } else {
//     currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
// }

// player.setCurrentTime(currentTime.seconds);

// player.on('play', function(timeupdate) {

//     console.log("currentTime before player.on()", currentTime);

//     localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate));

//     currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time")); 
    
//     console.log("currentTime inside player.on():", JSON.parse(localStorage.getItem("videoplayer-current-time")));

//     console.log('played the video!');
// });
