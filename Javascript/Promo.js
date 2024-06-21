const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    // Utilizador está logado, mostra o botão de Logout
    document.getElementById('login').style.display = 'none';
    document.getElementById('profile').style.display = '';


} else {
    // Utilizador não está logado, mostra o botão de Login
    document.getElementById('login').style.display = '';
    document.getElementById('profile').style.display = 'none';
}
function Profile() {
    if (user.name == 'admin') {
        window.location.replace('LoginAdmin.html');
    }
    else if (user) {
        window.location.replace('LoginUser.html');
    }
    else {
        window.location.replace('Login.html');
    }
}

function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('show');
}