 
//  header
let openMenu = document.querySelector('.open');
let closeMenu = document.querySelector('.close');
let sideMenu = document.querySelector('.sidebar');

openMenu.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    sideMenu.style.right = '0%';
});

closeMenu.addEventListener("click", () => {
    sideMenu.style.right = '-50%';
});

document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!sideMenu.contains(targetElement) && targetElement !== openMenu) {
        sideMenu.style.right = '-50%';
    }
});


// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.50,
        spaceBetween: 15,
      },
      340: {
        slidesPerView: 1.90,
        spaceBetween: 10,
      },
      470:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      780: {
        slidesPerView: 3.20,
        spaceBetween: 20,
      },
      850:{
        slidesPerView: 3.70,
        spaceBetween: 15,
        
      },
      920: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  
  
  var swiperOne = new Swiper(".myContainer .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.50,
        spaceBetween: 15,
      },
      340: {
        slidesPerView: 1.90,
        spaceBetween: 10,
      },
      470:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      850:{
        slidesPerView: 3,
        spaceBetween: 15,
        
      },
      920: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    
  });