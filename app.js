const bars = document.querySelector(".bars");
const exit = document.querySelector("#exit");
const navContainer = document.querySelector(".nav-container");

bars.addEventListener("click", () => navContainer.classList.toggle("mobile"));

exit.addEventListener("click", () => navContainer.classList.remove("mobile"));



// GSAP ANIMATIONS

gsap.from('.content', {height:10, duration:1.5})
gsap.from('.anim1', {opacity: 0, duration: 1, y: 50, delay:1, ease:'power2.easeInOut', stagger: .4});
gsap.from('.hero-design', {opacity: 0, duration:2, y:100, delay:1});
gsap.from('.img-container', {opacity:0, duration: 1, y:-300})

// gsap.from('.content', {y:50, duration:1})















