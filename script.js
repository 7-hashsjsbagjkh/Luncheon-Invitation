// Open Invitation
const envelope = document.querySelector(".envelope");
const invitation = document.getElementById("invitation");
const screen = document.getElementById("envelopeScreen");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        screen.style.opacity = "0";

    }, 1200);

    setTimeout(() => {

        screen.style.display = "none";

        invitation.style.display = "block";

        invitation.style.animation = "fadeUp 1.5s";

        music.play().catch(()=>{});

    }, 1800);

});

// =======================
// Countdown
// =======================

const weddingDate = new Date("July 21, 2026 10:00:00").getTime();

const countdown = document.createElement("section");
countdown.className = "countdown";

countdown.innerHTML = `
<h2>Countdown</h2>

<div class="timer">
<div><span id="days">0</span><small>Days</small></div>
<div><span id="hours">0</span><small>Hours</small></div>
<div><span id="minutes">0</span><small>Minutes</small></div>
<div><span id="seconds">0</span><small>Seconds</small></div>
</div>
`;

document.querySelector(".details").after(countdown);

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

},1000);


// =======================
// Fade Animation
// =======================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});


// =======================
// Floating Petals
// =======================

for(let i=0;i<25;i++){

const flower=document.createElement("div");

flower.innerHTML="🌸";

flower.className="flower";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=8+Math.random()*10+"s";

flower.style.fontSize=16+Math.random()*18+"px";

document.body.appendChild(flower);

}


// =======================
// Sparkles
// =======================

setInterval(()=>{

const spark=document.createElement("div");

spark.className="sparkle";

spark.innerHTML="✨";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},2500);

},700);
