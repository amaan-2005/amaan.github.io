// PROFILE POPUP
const profilePic = document.getElementById("profilePic");
const profilePopup = document.getElementById("profilePopup");

profilePic.addEventListener("click", () => {
profilePopup.style.display =
profilePopup.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function(e) {
if (!profilePic.contains(e.target) && !profilePopup.contains(e.target)) {
profilePopup.style.display = "none";
}
});

// MATRIX RAIN BACKGROUND

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const text = "AMAANS WORKSPACE 0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
drops[i] = 1;
}

function draw() {
ctx.fillStyle = "rgba(11,14,20,0.08)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#2f323a";
ctx.font = fontSize + "px monospace";

for (let i = 0; i < drops.length; i++) {
const char = text.charAt(Math.floor(Math.random() * text.length));
ctx.fillText(char, i * fontSize, drops[i] * fontSize);

if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
drops[i] = 0;
}
drops[i]++;
}
}

setInterval(draw, 90);
