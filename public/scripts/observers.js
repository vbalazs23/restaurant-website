const activeRemover = function() {
    const asd = document.querySelectorAll('.nav-link');
    console.log(asd)
}



const sectionOne = document.querySelector('.hero-container');

const sectionOneOptions = { rootMargin: "-50%"};

const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById("1").classList.add('active');
                window.addEventListener('scroll', () => {
                    const scrolled = window.scrollY;
                    const heroRight = document.querySelector('.right');
                    heroRight.style.transform = `translateY(${scrolled/80}px)`;
                    const heroLeft = document.querySelector('.left');
                    heroLeft.style.transform = `translateY(${scrolled/80*-1}px)`;
                })
            } else if (!entry.isIntersecting) {
                document.getElementById("1").classList.remove('active')
            }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const sectionTwo = document.querySelector('.section-two');

const sectionTwoOptions = { threshold: 0.2 };

const sectionTwoObserver = new IntersectionObserver((entries, sectionTwoObserver) => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById("1").classList.remove('active');
                document.getElementById("2").classList.add('active');
                document.querySelector(".menu").classList.remove('hidden')
                window.addEventListener('scroll', () => {
                    const scrolled = window.scrollY;
                    const firstMenu = document.querySelector('.first');
                    firstMenu.style.transform = `translateY(${scrolled/60*-1}px)`;
                    const thirdMenu = document.querySelector('.third');
                    thirdMenu.style.transform = `translateY(${scrolled/80}px)`;
                })
            } else if (!entry.isIntersecting) {
                document.getElementById("2").classList.remove('active')
                document.querySelector(".menu").classList.add('hidden')
            }
    })
}, sectionTwoOptions);


sectionTwoObserver.observe(sectionTwo);

const sectionThree = document.querySelector('.about');

const sectionThreeOptions = { 
                             threshold: 0.1,
                             rootMargin: "-250px 0px 0px 0px"  };

const sectionThreeObserver = new IntersectionObserver((entries, sectionThreeObserver) => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                document.getElementById("2").classList.remove('active');
                document.getElementById("3").classList.add('active');
                window.addEventListener('scroll', () => {
                    const scrolled = window.scrollY;
                    const aboutBg = document.querySelector('.about-bg');
                    aboutBg.style.transform = `translateY(${scrolled/80}px)`;
                    const aboutText = document.querySelector('.about-hover');
                    aboutText.style.transform = `translateY(${scrolled/60*-1}px)`;
                })
            } else if (!entry.isIntersecting) {
                document.getElementById("3").classList.remove('active')
            }
    })
}, sectionThreeOptions);


sectionThreeObserver.observe(sectionThree);

const sectionFour = document.querySelector('.info');

const sectionFourOptions = { threshold: 0.2, 
                            rootMargin: "0px 0px -250px 0px" };

const sectionFourObserver = new IntersectionObserver((entries, sectionFourObserver) => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                document.getElementById("3").classList.remove('active')
                document.getElementById("4").classList.add('active');
                window.addEventListener('scroll', () => {
                    const scrolled = window.scrollY;
                    const infoMap = document.querySelector('.info-map');
                    infoMap.style.transform = `translateY(${scrolled/20*-1}px)`;
                })
            } else if (!entry.isIntersecting) {
                document.getElementById("4").classList.remove('active')
            }
    })
}, sectionFourOptions);


sectionFourObserver.observe(sectionFour);

