let navBtn = document.querySelector(".nav__toggle-icon")
let navMenueMobile = document.querySelector(".nav-mobile__wrapper")

navBtn.addEventListener("click" , function(){
    navBtn.classList.toggle("nav__toggle-icon--open")
    navMenueMobile.classList.toggle("nav-mobile__wrapper--open")
})