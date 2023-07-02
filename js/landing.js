let openMenu = document.querySelector('.open');
let closeMenu = document.querySelector('.close');
let sideMenu = document.querySelector('.sidebar');

openMenu.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    sideMenu.style.right = '0%';
});

closeMenu.addEventListener("click", () => {
    sideMenu.style.right = '-60%';
});

document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!sideMenu.contains(targetElement) && targetElement !== openMenu) {
        sideMenu.style.right = '-60%';
    }
});