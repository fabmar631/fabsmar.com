// Reveal on scroll (smooth + subtle)
const reveals = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => io.observe(el));

// Active nav link based on current page
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();

// Very subtle button "press" haptics feel (visual only)
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("is-down"));
  btn.addEventListener("mouseup", () => btn.classList.remove("is-down"));
  btn.addEventListener("mouseleave", () => btn.classList.remove("is-down"));
});
