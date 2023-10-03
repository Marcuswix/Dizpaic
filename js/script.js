
const toggleButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

toggleButton.addEventListener("click", () => {
  menu.classList.add('open')
  overlay.classList.add('show')
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open')
  overlay.classList.remove('show')
})

const toggleButton2 = document.getElementById("mobil-menu");

toggleButton2.addEventListener("click", () => {
  menu.classList.add('open')
  overlay.classList.add('show')
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open')
  overlay.classList.remove('show')
})


