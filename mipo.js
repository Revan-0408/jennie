const galleryImgs = document.querySelectorAll(".gallery img");

// --- Audio Player Global ---
const photoAudio = new Audio();

// --- Modal Foto ---
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    // tampilkan modal
    modal.style.display = "block";
    modalImg.src = img.src;
    modalCaption.textContent = img.getAttribute("data-quote") || img.alt;

    // mainkan audio khusus foto ini
    const soundSrc = img.getAttribute("data-sound");
    if (soundSrc) {
      photoAudio.src = soundSrc;
      photoAudio.currentTime = 0;
      photoAudio.play();
    }
  });
});

// Tutup modal (klik X)
closeBtn.onclick = () => {
  modal.style.display = "none";
  photoAudio.pause();
  photoAudio.currentTime = 0;
};

// Tutup modal 
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    photoAudio.pause();
    photoAudio.currentTime = 0;
  }
};

// --- Animasi Hati ---
function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 500);

// --- Quotes ---
const quotes = [
  "I wish you could see your self the way i see you 😻",
  "You and me, in this beautiful world 💖",
  "Stay with me, forever and always 🌸",
  "I would choose you in every lifetime 💕",
  "I love you so much more than the miles between us (^///^)"
];
let index = 0;
const quoteText = document.getElementById("quoteText");

function changeQuote() {
  quoteText.textContent = quotes[index];
  index = (index + 1) % quotes.length;
}
setInterval(changeQuote, 4000);
changeQuote();

// --- Music Button ---
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;
music.volume = 0.3;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🎶";
  } else {
    music.play();
    musicBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});

// --- Modal Pesan ---
const messageBtn = document.querySelector(".message-btn");
const messageModal = document.getElementById("messageModal");
const closeMessage = document.querySelector(".close-message");

messageBtn.addEventListener("click", () => {
  messageModal.style.display = "flex";
});

closeMessage.addEventListener("click", () => {
  messageModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === messageModal) {
    messageModal.style.display = "none";
  }
});
