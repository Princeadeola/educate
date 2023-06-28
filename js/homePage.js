 


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
  
  
  