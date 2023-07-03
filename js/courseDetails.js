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

// var mysong = document.getElementById("myvideo");
// var icon = document.getElementById("icon");
// icon.onclick = function(){
//     if(myvideo.paused){
//         mysong.play();
//         icon.src = "../images/pause.png"
//     }else{
//         mysong.pause();
//         icon.src = "../images/play.png"
//     }
// }

// OPTION LISTS 
function openTab(evt, option) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabbeb");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(option).style.display = "block";
    evt.currentTarget.className += " active";
  }

// curriculum .
function openCurri(evt, curriculumlist) {
  var i, x, tablinks;
  x = document.getElementsByClassName("curriculum");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablist");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(curriculumlist).style.display = "block";
  evt.currentTarget.className += " active";
}

  // FAQS 
  function toggleAnswer(index) {
    var answer = document.getElementById('answer-' + index);
    if (answer.style.display === 'none') {
        answer.style.display = 'block';

    } else {
        answer.style.display = 'none';
    }
}
