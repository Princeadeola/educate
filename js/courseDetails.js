
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
