const bars = document.querySelector(".bars");
const exit = document.querySelector("#exit");
const navContainer = document.querySelector(".nav-container");

bars.addEventListener("click", () => navContainer.classList.toggle("mobile"));

exit.addEventListener("click", () => navContainer.classList.remove("mobile"));

// GSAP ANIMATIONS

gsap.from(".content", { height: 10, duration: 1.5 });
gsap.from(".anim1", {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 1,
  ease: "power2.easeInOut",
  stagger: 0.4,
});
gsap.from(".hero-design", { opacity: 0, duration: 2, y: 100, delay: 1 });
gsap.from(".img-container", { opacity: 0, duration: 1, y: -300 });

// barba for page transitions

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 400,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 400,
});

// smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  easing: "easeIn",
});

// rellax for parallex effect

var rellax = new Rellax(".rellax");
