function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// DARK MODE

// OLD CODE

function darkMode() {
    const darkMode = document.querySelector("link");
    darkMode.href = "/darkmode.css"
}

// NEW CODE

const toggle = document.getElementById('toggleDark');
const lightToggle = document.getElementById('toggleLight');
const body = document.querySelector('body');
const title = document.querySelectorAll('.title');
const a = document.querySelectorAll('a');
const logo = document.querySelector('.logo');
const arrow = document.querySelectorAll('#arrow');
const textContainer = document.querySelector('.text-container');

const p = document.querySelectorAll('p');
const detailsContainer = document.querySelectorAll(".details-container");
console.log(detailsContainer)



const contactInfoUpperContainer = document.querySelector('.contact-info-upper-container');



const toggleDarkLightMode = document.getElementById('toggleDarkLightMode');

toggleDarkLightMode.onclick = () => {
    document.body.classList.toggle("dark-theme");

    // We use forEach since the a is set to querySelectorAll
    a.forEach((e) => {
        e.classList.toggle("dark-theme-font")
    })

    title.forEach((e) => {
        e.classList.toggle("dark-theme-font")
    })

    p.forEach((e) => {
        e.classList.toggle("dark-theme-font")
    })

    detailsContainer.forEach((e) => {
        e.classList.toggle("dark-theme")
    })
}