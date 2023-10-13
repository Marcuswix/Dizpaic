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

// Open up Submenu "Erbjudanden"
const showSubmenuDeals = document.getElementById("submenu-deals")
const faGreaterThanDeals = document.getElementById("fa-greater-than-deals")

function showHideSubmenuDeals()
{
  if (showSubmenuDeals.classList.contains("hide"))
  {
    showSubmenuDeals.classList.remove("hide")
    faGreaterThanDeals.classList.add("rotate")
  }

  else
  {
    showSubmenuDeals.classList.add("hide")
    faGreaterThanDeals.classList.remove("rotate")
  }
}

const submenuOffice = document.getElementById("submenu-office")
const faGreaterThanOffice = document.getElementById("fa-greater-than-office")

function showHideSubmenuOffice()
{
  if (submenuOffice.classList.contains("hide"))
  {
    submenuOffice.classList.remove("hide")
    faGreaterThanOffice.classList.add("rotate")
  }

  else
  {
    submenuOffice.classList.add("hide")
    faGreaterThanOffice.classList.remove("rotate")
  }
}

