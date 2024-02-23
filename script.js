function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
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


const toggleDarkLightMode = document.getElementById('toggleDarkLightMode');
// const toggleDarkLightMode = document.querySelectorAll('toggleDarkLightMode');

toggleDarkLightMode.onclick = () => {
    //note for some reason, I couldn't define the logo variable outside and get it to work inside. So the code below works instead.

    document.querySelector('body').classList.toggle('dark-theme')
    document.querySelector('.logo').classList.toggle('dark-theme-font')
    document.querySelector('.contact-info-upper-container').classList.toggle('dark-theme')

    //adding and removing sun and moon icon
    // document.querySelector('.darkmode-icon').style.display = 'none';
    // document.querySelector('.lightmode-icon').style.display = 'inline-block';

    // We use forEach since the a is set to querySelectorAll

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