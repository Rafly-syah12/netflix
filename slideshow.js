const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideDuration = 3000; // 3 detik per slide

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide++;

  // masih ada slide → lanjut
  if (currentSlide < slides.length) {
    showSlide(currentSlide);
  } 
  // sudah slide terakhir → pindah halaman
  else {
    window.location.href = "movies.html";
  }
}

// tampilkan slide pertama
showSlide(currentSlide);

// otomatis jalan
setInterval(nextSlide, slideDuration);