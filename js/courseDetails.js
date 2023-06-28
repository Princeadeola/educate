// let menu = document.querySelector('#menu-icon');
// let options_list = document.querySelector('.options_list');

// menu.onclick = () => {
//     menu.classList.toggle('uil-x');
//     options_list.classList.toggle('active');
// }

// const bar = document.getElementById('bar');
// const list = document.getElementById('options_list');

// if (bar) {
//     bar.addEventListener('click', () => {
//         list.classList.add('active');
//     })
// }

var mysong = document.getElementById("myvideo");
var icon = document.getElementById("icon");
icon.onclick = function(){
    if(myvideo.paused){
        mysong.play();
        icon.src = "../images/pause.png"
    }else{
        mysong.pause();
        icon.src = "../images/play.png"
    }
}