let openMenu = document.querySelector('.open');
let closeMenu = document.querySelector('.close');
let sideMenu = document.querySelector('.sidebar');

openMenu.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    sideMenu.style.right = '0%';
});

closeMenu.addEventListener("click", () => {
    sideMenu.style.right = '-100%';
});

document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!sideMenu.contains(targetElement) && targetElement !== openMenu) {
        sideMenu.style.right = '-100%';
    }
});

// Function to toggle sidebar visibility based on screen width
function toggleSidebar() {
  if (window.innerWidth > 1024) {
    sideMenu.classList.add('hidden');
  } else {
    sideMenu.classList.remove('hidden');
  }
}

// Call toggleSidebar initially
toggleSidebar();

// Attach event listener to window resize event
window.addEventListener('resize', () => {
  // Delay the toggleSidebar function execution to ensure the correct screen width is considered
  setTimeout(toggleSidebar, 100);
});




// SHUFFLING THE TABS ON FEATURED PRODUCTS
const tabs = document.querySelectorAll('.tab_btn'),
    all_content = document.querySelectorAll('.content');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        all_content.forEach(content => {
            content.classList.remove('active');
        })
        all_content[index].classList.add('active');
    });
});




    new Swiper('.mySwiper'), {
        slidesPerView: 3,

        grabCursor: true,

        spaceBetween: 20,

        freeMode: true,

        simulateTouch: true,

        pagination: true,

        loop: true,

        speed: 2000,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        breakpoints: {
            // when window width is >= 200px (for mobile screens)
            200: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            // when window width is >= 340px (for mobile screens)
            300: {
                slidesPerView: 1.75,
                spaceBetween: 20
            },
            // when window width is >= 200px (for mobile screens)
            350: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 200px (for mobile screens)
            450: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            // when window width is >= 576px (for mobile screens)
            570: {
                slidesPerView: 2.75,
                spaceBetween: 30
            },
            // when window width is >= 200px (for mobile screens)
            700: {
                slidesPerView: 3.5,
                spaceBetween: 20
            },
            // when window width is >= 992px (for large screens)
            992: {
                slidesPerView: 3.75,
                spaceBetween: 30
            },
            1023: {
                slidesPerView: 4.15,
                spaceBetween: 30
            }
        },
    };
   




new Swiper('.mySlider', {
    slidesPerView: 3,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    spaceBetween: 30,

    loop: false,

    breakpoints: {
        // when window width is >= 200px (for mobile screens)
        200: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 340px (for mobile screens)
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        350: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        450: {
            slidesPerView: 2.25,
            spaceBetween: 20
        },
        // when window width is >= 576px (for mobile screens)
        570: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        // when window width is >= 200px (for mobile screens)
        700: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 992px (for large screens)
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
});