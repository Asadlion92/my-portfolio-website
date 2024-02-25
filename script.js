function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const hamburgerIcon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    hamburgerIcon.classList.toggle("open")
}

// DARK MODE

const title = document.querySelectorAll('.title');
const a = document.querySelectorAll('a');
const arrow = document.querySelectorAll('#arrow');
const p = document.querySelectorAll('p');
const detailsContainer = document.querySelectorAll(".details-container");
const icon = document.querySelectorAll(".icon");
const h3 = document.querySelectorAll("h3");
const btn = document.querySelectorAll('button');
const experienceSubTitle = document.querySelectorAll('.experience-sub-title');
const logo = document.querySelectorAll('.logo');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

const hamburgerDarkMode = document.querySelector('.hamburger-darkmode');
const hamburgerLightMode = document.querySelector('.hamburger-lightmode');

sunIcon.style.display = 'none';
hamburgerLightMode.style.display = 'none';

let hideIcon = false;

const hamburgerIcon = document.querySelectorAll('span');


const toggleDarkLightMode = () => {
    //note for some reason, I couldn't define the logo variable outside and get it to work inside. So the code below works instead.

    document.querySelector('body').classList.toggle('dark-theme')
    document.querySelector('.contact-info-upper-container').classList.toggle('dark-theme')

    hideIcon = !hideIcon;

    if (hideIcon) {
        sunIcon.style.display = 'inline-block';
        sunIcon.style.marginLeft = '-45px';
        moonIcon.style.display = 'none';
        hamburgerIcon.forEach((e) => {
            e.style.backgroundColor = 'white'
        })
        hamburgerDarkMode.style.display = 'none';
        hamburgerLightMode.style.display = 'inline-block'
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block'
        hamburgerIcon.forEach((e) => {
            e.style.backgroundColor = 'black'
        })
        hamburgerDarkMode.style.display = 'inline-block';
        hamburgerLightMode.style.display = 'none'
    }

    // We use forEach since the a is set to querySelectorAll

    logo.forEach((e) => {
        e.classList.toggle('dark-theme-font')
    })

    experienceSubTitle.forEach((e) => {
        e.classList.toggle("dark-theme-font")
    })

    btn.forEach((e) => {
        e.classList.toggle("dark-theme-font")
    })

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

    icon.forEach((e) => {
        e.classList.toggle("dark-theme-font")
    })

    h3.forEach((e) => {
        e.classList.toggle("dark-theme-font")
    })
    

}

moonIcon.addEventListener('click', toggleDarkLightMode)
sunIcon.addEventListener('click', toggleDarkLightMode)

hamburgerDarkMode.addEventListener('click', toggleDarkLightMode)
hamburgerLightMode.addEventListener('click', toggleDarkLightMode)