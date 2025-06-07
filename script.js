
// Scroll Progress Bar Logic
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const progressBar = document.getElementById("scroll-indicator");
  progressBar.style.height = `${scrollPercent}%`;
});

// Loading animation
const letters = document.querySelectorAll(".loading-text span");

// Animate each letter with stagger
gsap.to(letters, {
  opacity: 1,
  duration: 1.2,
  stagger: 0.15,
  onUpdate: function () {
    letters.forEach((el, i) => {
      gsap.to(el, {
        color: "#ffffff",
        duration: 0.2,
        delay: i * 0.15,
      });
      gsap.to(el, {
        color: "rgba(255,255,255,0.1)",
        duration: 0.2,
        delay: i * 0.15 + 0.4,
      });
      gsap.to(el.querySelector("::after"), {
        opacity: 1,
        duration: 0.2,
        delay: i * 0.15,
      });
    });
  },
  onComplete: () => {
    gsap.to("#loading", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        document.getElementById("loading").style.display = "none";
      },
    });
  },
});


// Animation for Hero Text
gsap.from(".hero-left", {
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".hero-right", {
  opacity: 0,
  x: 50,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.3,
});

gsap.utils.toArray(".journey-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    duration: .4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    delay: index * 0.1,
  });
});

// HERO SECTION PARTICLES
particlesJS("particles-hero", {
  "particles": {
    "number": {
      "value": 200,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "opacity": { "value": 0.7, "random": false },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "bottom",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": false },
      "onclick": { "enable": false }
    }
  },
  "retina_detect": true
});



particlesJS("particles-projects", {
  "particles": {
    "number": { "value": 50 },
    "color": { "value": "ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 4,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": { "opacity": 1 }
      },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});


gsap.registerPlugin(ScrollTrigger);
  
gsap.utils.toArray('.fade-in').forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
  });
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    start: "top 85%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power3.out"
});
  
  gsap.from("#about-img", {
    scrollTrigger: {
      trigger: "#about-img",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    x: -100,
    duration: .4,
    ease: "power3.out"
  });
  

  gsap.from("#about-text", {
    scrollTrigger: {
      trigger: "#about-text",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    duration: .4,
    ease: "power3.out",
    delay: 0.2
  });
  
  gsap.from("#techstack h2", {
    scrollTrigger: {
      trigger: "#techstack",
      start: "top 80%",
      toggleActions: "play none none reset"
    },
    opacity: 0,
    y: -40,
    duration: 1.2,
    ease: "power3.out"
  });
  
  gsap.utils.toArray("#techstack .group").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reset"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.1,
    });
  });

  gsap.utils.toArray('.tech-category').forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.utils.toArray('.reveal-section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reset"
      }
    });
  });

  // Up coming projects

  gsap.utils.toArray(".upcoming-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: "#upcoming-projects",
        start: "top 85%",
        toggleActions: "play none none reset"
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.15,
    });
  });

const Binomyimages = [
  './assets/binomy/dashboard.JPG',
  './assets/binomy/favorites.JPG',
  './assets/binomy/favoris.JPG',
  './assets/binomy/notif.JPG',
  './assets/binomy/profile.JPG',
  './assets/binomy/viewdetails.JPG',
  './assets/binomy/details.JPG',
  './assets/binomy/conversation.JPG',
  './assets/binomy/addroom.JPG',
  './assets/binomy/addroom2.JPG',
  './assets/binomy/archi.JPG',
];
const Wassitimages = [
  
  './assets/wassit/hello.JPG',
  './assets/wassit/signup.JPG',
  './assets/wassit/login.JPG',
  './assets/wassit/wassit.JPG',
  './assets/wassit/details.JPG',
  './assets/wassit/details2.JPG',
  './assets/wassit/addhouse.JPG',
  
];
const soknaimages = [
  './assets/sokna/login.JPG',
  './assets/sokna/register.JPG',
  './assets/sokna/ccompte.JPG',
  './assets/sokna/compte.JPG',
  './assets/sokna/dash.JPG',
  './assets/sokna/addlog1.JPG',
  './assets/sokna/addlog2.JPG',
  './assets/sokna/addlog3.JPG',
  './assets/sokna/details2.JPG',
  './assets/sokna/details3.JPG',
  './assets/sokna/filtre.JPG',
  './assets/sokna/housedetails.JPG',
  
];

const onlinelibraryimages = [
  './assets/onlinelibrary/login.JPG',
  './assets/onlinelibrary/register.JPG',
  './assets/onlinelibrary/author_add.JPG',
  './assets/onlinelibrary/book_add.JPG',
  './assets/onlinelibrary/books_list.JPG',
  './assets/onlinelibrary/borrowed_books.JPG',
  './assets/onlinelibrary/brrdbooks.JPG',
  './assets/onlinelibrary/search.JPG',
  './assets/onlinelibrary/swagger.JPG',
];

let carouselImages = []; // this will point to the array in use
let currentIndex = 0;


function openCarousel(imagesArray, index = 0) {
  carouselImages = imagesArray;
  currentIndex = index;
  document.getElementById("carouselModal").classList.remove("hidden");
  showImage();
}

function closeCarousel() {
  document.getElementById("carouselModal").classList.add("hidden");
}

function showImage() {
  const img = document.getElementById("carouselImage");
  img.src = carouselImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  showImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage();
}



  
