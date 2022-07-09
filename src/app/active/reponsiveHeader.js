const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

let status = true;

function showMenu() {
    if (status) {
        // navbar.style.display = "block";
        navbar.innerHTML='<i class="fa-solid fa-align-justify"></i>'
        menu.style.display = "none";
        status = false
    } else {
        // navbar.style.display = "none";
        navbar.innerHTML='<i class="fa-solid fa-xmark"></i>'
        menu.style.display = "block";
        status = true
    }
}

navbar.addEventListener('click', (e) => {
    e.preventDefault();
    showMenu()
})