const screens = ["intro", "birthday", "little", "final"];

function showScreen(id) {
  screens.forEach(s => document.getElementById(s).classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("openBtn").addEventListener("click", () => showScreen("birthday"));
document.getElementById("littleBtn").addEventListener("click", () => showScreen("little"));
document.getElementById("finalBtn").addEventListener("click", () => {
  showScreen("final");
  confetti();
});
document.getElementById("againBtn").addEventListener("click", () => showScreen("intro"));

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

document.querySelectorAll(".mini-card").forEach(card => {
  card.addEventListener("click", () => {
    modalText.textContent = card.dataset.message;
    modal.classList.add("show");
  });
});

function closeModal() {
  modal.classList.remove("show");
}
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function confetti() {
  const pieces = ["✦", "♡", "✧", "•", "✨"];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement("span");
    el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-20px";
    el.style.fontSize = (12 + Math.random() * 18) + "px";
    el.style.zIndex = "30";
    el.style.animation = `confettiFall ${1.8 + Math.random() * 2}s linear forwards`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4200);
  }
}

const style = document.createElement("style");
style.textContent = `
@keyframes confettiFall {
  to { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);

function floatingHeart() {
  const container = document.querySelector(".floating-hearts");
  const el = document.createElement("span");
  el.textContent = Math.random() > .5 ? "♡" : "✦";
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (12 + Math.random() * 16) + "px";
  el.style.animationDuration = (7 + Math.random() * 7) + "s";
  container.appendChild(el);
  setTimeout(() => el.remove(), 15000);
}
setInterval(floatingHeart, 1200);
