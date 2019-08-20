import '../sass/styles.scss';
import { TweenMax, Sine } from 'gsap';

const menuAnimation = TweenMax.to('#coral-line', 2 , {
    attr: {
        d: "M.36,0C45.82,33,117.78,77,214,101.86c94.76,24.5,134.91,10.24,227,37,132.56,38.53,119.2,88.38,219,116,180.65,50,266.76-101.6,432-40,77.65,28.95,103.74,79.26,181,76,64.12-2.69,114.67-40.22,146.23-69.81"
    },
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
});

// menuAnimation();

// TweenMax.to('#Path_34', 1, {
//     css:{scale:0.9, rotation: 15, transformOrigin: '50% 50%'},
//     repeat: -1,
//     yoyo: true,
//     ease: Sine.easeInOut
// })


// MENU TOGGLE

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');


[hamburger, closeMenu].forEach(el => {
    el.addEventListener('click', toggleMenuClass);
})

function toggleMenuClass() {
    menu.classList.toggle('menu--active');
}

// Poligrafia intersection observer

const poligrafiaTarget = document.getElementById('poligrafia');
const outdoor = document.getElementById('outdoor');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
  }

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id)
        } else if (!entry.isIntersecting) {
            console.log(`I'm hidden right now!`)
        }
    })
}

const observer = new IntersectionObserver(callback, options);

observer.observe(poligrafiaTarget);
observer.observe(outdoor);
