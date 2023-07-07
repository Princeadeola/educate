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