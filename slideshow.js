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

// script.js

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Add loading animation to images
  const images = document.querySelectorAll('.poster-item img');
  
  images.forEach(img => {
    // Add loading attribute for better performance
    img.setAttribute('loading', 'lazy');
    
    // Add fallback for missing images
    img.onerror = function() {
      this.src = 'https://via.placeholder.com/150x230/333/fff?text=No+Image';
    };
  });
  
  // Add click event to poster items
  const posterItems = document.querySelectorAll('.poster-item');
  
  posterItems.forEach(item => {
    item.addEventListener('click', function() {
      const title = this.querySelector('.poster-title').textContent;
      const details = this.querySelector('.poster-details').textContent;
      
      // Create modal or alert with movie details
      alert(`Now Playing: ${title}\n${details}`);
      
      // You could replace this with a modal:
      // showMovieModal(title, details);
    });
  });
  
  // Animate background numbers on scroll
  window.addEventListener('scroll', function() {
    const bgNumbers = document.querySelectorAll('.bg-numbers span');
    const scrollY = window.scrollY;
    
    bgNumbers.forEach((number, index) => {
      const speed = 0.3;
      const yPos = -(scrollY * speed) + (index * 50);
      number.style.transform = `translateY(${yPos}px)`;
    });
  });
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only smooth scroll for same-page links
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
      navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0))';
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    const posterItems = document.querySelectorAll('.poster-item');
    const focusedItem = document.querySelector('.poster-item:focus');
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      
      let currentIndex = Array.from(posterItems).indexOf(focusedItem);
      let nextIndex;
      
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % posterItems.length;
      } else {
        nextIndex = (currentIndex - 1 + posterItems.length) % posterItems.length;
      }
      
      if (focusedItem) focusedItem.classList.remove('focused');
      posterItems[nextIndex].classList.add('focused');
      posterItems[nextIndex].focus();
    }
  });
  
  // Initialize first poster as focused
  if (posterItems.length > 0) {
    posterItems[0].classList.add('focused');
    posterItems[0].setAttribute('tabindex', '0');
  }
});