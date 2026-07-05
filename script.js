/*==================================================
B & L Luxury Wedding Invitation
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

const openingScreen = document.getElementById("openingScreen");
const invitation = document.getElementById("mainInvitation");
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openInvitation");
const music = document.getElementById("bgMusic");

/*==================================================
Envelope Opening
==================================================*/

openButton.addEventListener("click", () => {

envelope.classList.add("open");

setTimeout(() => {

openingScreen.classList.add("hide");

invitation.classList.add("show");

music.play().catch(() => {});

}, 1700);

});

/*==================================================
Countdown
==================================================*/

const eventDate = new Date("July 21, 2026 10:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown(){

const now = new Date().getTime();

const distance = eventDate - now;

if(distance <= 0){

days.textContent="00";
hours.textContent="00";
minutes.textContent="00";
seconds.textContent="00";

return;

}

const d = Math.floor(distance / (1000*60*60*24));

const h = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

const m = Math.floor((distance % (1000*60*60))/(1000*60));

const s = Math.floor((distance % (1000*60))/1000);

days.textContent = String(d).padStart(2,"0");
hours.textContent = String(h).padStart(2,"0");
minutes.textContent = String(m).padStart(2,"0");
seconds.textContent = String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/*==================================================
Flip Cards
==================================================*/

document.querySelectorAll(".flip-card").forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("active");

});

});

/*==================================================
Scroll Fade Animation
==================================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(".fade-section").forEach(section=>{

observer.observe(section);

});/*==================================================
Falling Rose Petals
==================================================*/

const petalsContainer = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "%";

    petal.style.animationDuration = (8 + Math.random() * 8) + "s";

    petal.style.animationDelay = Math.random() * 3 + "s";

    petal.style.opacity = 0.4 + Math.random() * 0.6;

    const size = 10 + Math.random() * 14;

    petal.style.width = size + "px";
    petal.style.height = size + "px";

    petalsContainer.appendChild(petal);

    petal.addEventListener("animationend", () => {

        petal.remove();

    });

}

setInterval(createPetal, 450);

/*==================================================
Floating Sparkles
==================================================*/

const sparkleContainer = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "%";

    sparkle.style.top = Math.random() * 100 + "%";

    sparkle.style.animationDuration = (2 + Math.random() * 3) + "s";

    sparkle.style.animationDelay = Math.random() + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 5000);

}

for (let i = 0; i < 40; i++) {

    createSparkle();

}

setInterval(createSparkle, 600);

/*==================================================
Parallax Hero
==================================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const y = window.pageYOffset;

    hero.style.backgroundPositionY = y * 0.35 + "px";

});

/*==================================================
Luxury Button Hover Glow
==================================================*/

document.querySelectorAll(".luxury-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/*==================================================
Prevent Double Opening
==================================================*/

let opened = false;

openButton.addEventListener("click", () => {

    if (opened) return;

    opened = true;

});

/*==================================================
End
==================================================*/

});
