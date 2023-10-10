// Menu
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

// Go to top function

function goToTop()
{
  window.scrollTo(
    {
      top: 0,
      behavior: "smooth"
    }
  )
}

// Hide "Go to top"-button

window.addEventListener("scroll", function()
  {
    let element = document.getElementById("Go-To-Top")

    if (window.scrollY > 200)
    {
      element.classList.remove("btn-hide")
    }

    else
    {
      element.classList.add("btn-hide")
    }
  }
)


