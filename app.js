var getButton = document.querySelector(".btn-toggle");
var getNav = document.querySelector(".nav-menu");
getButton.addEventListener("click", AddMenu);

function AddMenu()
{
    getNav.classList.add("activeMenu");
}