// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 800);
  }, 1200);
});

// OPEN ENVELOPE
const envelope = document.querySelector(".envelope");
const invitation = document.getElementById("invitation");
const envelopeScreen = document.getElementById("envelopeScreen");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeScreen.style.display = "none";
    invitation.style.display = "block";

    if (music) {
      music.play().catch(() => {});
    }

    startPetals();
  }, 1500);
});

// COUNTDOWN
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").textContent = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// PETALS
function startPetals() {
  setInterval(() => {
    const petal = document.createElement("div");
    petal.innerHTML = "🌸";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-40px";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.transition = "transform 8s linear, opacity 8s";
    petal.style.zIndex = "999";

    document.body.appendChild(petal);

    setTimeout(() => {
      petal.style.transform = "translateY(110vh) rotate(360deg)";
      petal.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      petal.remove();
    }, 8000);

  }, 500);
}

// TAP TO REVEAL
document.getElementById("dressScratch").onclick = () => {
  document.getElementById("dressScratch").innerHTML = "🤍 White";
};

document.getElementById("venueScratch").onclick = () => {
  document.getElementById("venueScratch").innerHTML =
    "📍 Khan Haveli (Kajoor Wala Ghar)<br>Hayyal Sharif";
};
