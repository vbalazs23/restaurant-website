const mainButton = document.getElementById('1');

mainButton.addEventListener('click', (event) => {
    event.preventDefault();
    const element = document.querySelector(".hero-container");

// smooth scroll to element and align it at the bottom
element.scrollIntoView({ behavior: 'smooth'});
})

const menuButton = document.getElementById('2');

menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    const element = document.querySelector(".pre-menu");

// smooth scroll to element and align it at the bottom
element.scrollIntoView({ behavior: 'smooth'});
})

const aboutButton = document.getElementById('3');

aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
    const element = document.querySelector(".about");

// smooth scroll to element and align it at the bottom
element.scrollIntoView({ behavior: 'smooth'});
})

const infoButton = document.getElementById('4');

infoButton.addEventListener('click', (event) => {
    event.preventDefault();
    const element = document.querySelector(".info");

// smooth scroll to element and align it at the bottom
element.scrollIntoView({ behavior: 'smooth'});
})