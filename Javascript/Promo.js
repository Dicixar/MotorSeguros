const slides = document.querySelectorAll(".slides img"); //seleciona todos os elementos img da div slides
let slideIndex = 0; 
let intervalId = null;

//quando o doc html é carregado inicia a func initializeSlider
document.addEventListener("DOMContentLoaded", initializeSlider); 

//ve se existem slides para mostrar > 0
function initializeSlider() {
    if (slides.length > 0) {
        //seleciona o atual slide e adiciona a classList
        slides[slideIndex].classList.add("displaySlide");
        //3000 ms = 3sec e chama a função nextslide
        intervalId = setInterval(nextSlide, 3000);
    }
}

//mostra os slides 
function showSlide(index) {
    if (index >= slides.length) {
        // se o index for maior que a quantidade de slides volta do 0
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    //para cada slide coloca esta classe
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

//Passa para o slide anterior, renicia o intervalo e diminui o index
function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

//Passa para o proximo slide, aumentado o index
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