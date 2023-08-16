'use strict'

const sun = document.querySelector('#sun');
const mercury = document.querySelector('#mercury');
const sunX = 735;
const sunY = 295;
const px = (n) => n +'px';
const rad = (deg, speed) => deg * speed / 180;
const delay = Math.round(Math.random() * 100) / 100;

sun.style.top = px(sunY);
sun.style.left = px(sunX);

function setSolarsystem(id, speed, radius){
    let deg = 0;
    const planets = document.getElementById(id);
    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg, speed));
        const y = sunY + radius * Math.sin(rad(deg, speed));
        planets.style.top = px(y);
        planets.style.left = px(x);
        deg--;
    }, 60);
}

function setMoon(id, planetId, speed, radius){
    let deg = 0;
    const planets = document.getElementById(planetId);
    const moon = document.getElementById(id);
    setInterval(() => {
        const planetsX = Number(planets.style.left.slice(0, -2));
        const planetsY = Number(planets.style.top.slice(0, -2));
        const x = planetsX + radius * Math.cos(rad(deg, speed));
        const y = planetsY + radius * Math.sin(rad(deg, speed));
        moon.style.top = px(y);
        moon.style.left = px(x);
        deg--;
    }, 60);
}

setSolarsystem('mercury', 0.5, 70);
setSolarsystem('venus', 1.5, 130);
setSolarsystem('earth', 2, 180);
setSolarsystem('mars', 1, 250);
setSolarsystem('jupiter', 1.8, 300);
setSolarsystem('saturn', 2.5, 330);
setSolarsystem('uranus', 2.1, 400);
setSolarsystem('neptune', 2.3, 450);
setMoon('moon', 'earth', 25, 30);