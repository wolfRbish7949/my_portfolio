// Starry background animation
const galaxyBg = document.getElementById('galaxy-bg');
const stars = [];

function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${randomBetween(0, 100)}vh`;
    star.style.left = `${randomBetween(0, 100)}vw`;
    star.style.width = star.style.height = `${randomBetween(1, 3)}px`;
    star.style.background = `rgba(255,255,255,${randomBetween(0.5,1)})`;
    star.style.position = 'absolute';
    star.style.borderRadius = '50%';
    star.style.boxShadow = `0 0 ${randomBetween(5, 20)}px #7df9ff`;
    galaxyBg.appendChild(star);
    stars.push(star);
}

// Shooting star animation
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.top = `${randomBetween(0, 80)}vh`;
    shootingStar.style.left = `-${randomBetween(10, 30)}vw`;
    shootingStar.style.width = '2px';
    shootingStar.style.height = '80px';
    shootingStar.style.background = 'linear-gradient(180deg, #fff, #7df9ff, transparent)';
    shootingStar.style.position = 'absolute';
    shootingStar.style.transform = 'rotate(30deg)';
    shootingStar.style.opacity = 0.7;
    shootingStar.style.zIndex = 0;
    galaxyBg.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.style.transition = 'all 1.2s linear';
        shootingStar.style.left = '120vw';
        shootingStar.style.opacity = 0;
    }, 10);

    setTimeout(() => {
        galaxyBg.removeChild(shootingStar);
    }, 1300);
}

setInterval(createShootingStar, 3000);

// Optional: Pause/play background audio on click
const bgAudio = document.getElementById('bg-audio');
bgAudio.volume = 0.1;
bgAudio.autoplay = true;
bgAudio.loop = true;

galaxyBg.addEventListener('click', () => {
    if (bgAudio.paused) {
        bgAudio.play();
    } else {
        bgAudio.pause();
    }
});

// Add some CSS for shooting stars dynamically
const style = document.createElement('style');
style.innerHTML = `
.star {
    pointer-events: none;
    transition: opacity 1s;
}
.shooting-star {
    pointer-events: none;
    transition: all 1.2s linear;
}
`;
document.head.appendChild(style);

// Asteroid belt effect for Launch Projects page
if (document.getElementById('asteroid-belt')) {
    const belt = document.getElementById('asteroid-belt');
    const asteroidCount = 12;
    for (let i = 0; i < asteroidCount; i++) {
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid';
        const angle = (360 / asteroidCount) * i;
        asteroid.style.transform = `rotate(${angle}deg) translateX(250px) rotate(-${angle}deg)`;
        asteroid.style.animationDelay = `${(i / asteroidCount) * 12}s`;
        belt.appendChild(asteroid);
    }
}

// Orbiting skills effect for Orbit of Skills page
if (document.getElementById('skills-orbit')) {
    const orbit = document.getElementById('skills-orbit');
    const skills = [
        {icon: '💻', label: 'Web'},
        {icon: '🤖', label: 'AI'},
        {icon: '🗄️', label: 'DB'},
        {icon: '🔢', label: 'DSA'},
        {icon: '🐍', label: 'Python'},
        {icon: '☕', label: 'Java'},
        {icon: '📱', label: 'Android'},
        {icon: '🎨', label: 'Design'}
    ];
    // Center planet
    const center = document.createElement('div');
    center.className = 'orbit-center';
    orbit.appendChild(center);
    // Orbiting planets
    for (let i = 0; i < skills.length; i++) {
        const planet = document.createElement('div');
        planet.className = 'orbit-planet';
        planet.innerText = skills[i].icon;
        const angle = (360 / skills.length) * i;
        planet.style.transform = `rotate(${angle}deg) translateX(160px) rotate(-${angle}deg)`;
        planet.style.animationDelay = `${(i / skills.length) * 10}s`;
        orbit.appendChild(planet);
    }
}

// Nebula and twinkling stars effect for Star Logs page
if (document.getElementById('nebula-bg')) {
    const nebulaBg = document.getElementById('nebula-bg');
    // Nebula clouds
    for (let i = 0; i < 3; i++) {
        const nebula = document.createElement('div');
        nebula.className = 'nebula';
        nebula.style.width = `${200 + Math.random()*150}px`;
        nebula.style.height = `${120 + Math.random()*100}px`;
        nebula.style.top = `${10 + i*30 + Math.random()*10}%`;
        nebula.style.left = `${20 + i*25 + Math.random()*10}%`;
        nebulaBg.appendChild(nebula);
    }
    // Twinkling stars
    for (let i = 0; i < 40; i++) {
        const star = document.createElement('div');
        star.className = 'twinkle-star';
        star.style.top = `${Math.random()*100}%`;
        star.style.left = `${Math.random()*100}%`;
        star.style.animationDelay = `${Math.random()*2}s`;
        nebulaBg.appendChild(star);
    }
}

// Satellite/capsule effect for Contact Capsule page
if (document.getElementById('satellite-bg')) {
    const satBg = document.getElementById('satellite-bg');
    // Satellite/capsule
    const sat = document.createElement('div');
    sat.className = 'satellite';
    sat.innerText = '🛰️';
    satBg.appendChild(sat);
    // Signal waves
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'signal-wave';
        wave.style.animationDelay = `${i * 0.7}s`;
        satBg.appendChild(wave);
    }
}

// 3D cubes and binary rain for Mission Control page
if (document.getElementById('cubes-bg')) {
    const cubesBg = document.getElementById('cubes-bg');
    for (let i = 0; i < 7; i++) {
        const cube = document.createElement('div');
        cube.className = 'cube3d';
        cube.style.top = `${10 + Math.random()*70}%`;
        cube.style.left = `${5 + Math.random()*90}%`;
        cube.style.animationDelay = `${Math.random()*8}s`;
        cubesBg.appendChild(cube);
    }
}
if (document.getElementById('binary-bg')) {
    const binaryBg = document.getElementById('binary-bg');
    for (let i = 0; i < 18; i++) {
        const digit = document.createElement('div');
        digit.className = 'binary-digit';
        digit.innerText = Math.random() > 0.5 ? '0' : '1';
        digit.style.left = `${Math.random()*100}%`;
        digit.style.animationDelay = `${Math.random()*4}s`;
        binaryBg.appendChild(digit);
    }
}
// Add 3D tilt to skill icons if present
const skillSpans = document.querySelectorAll('.skills span');
skillSpans.forEach(span => span.classList.add('tilt-3d')); 