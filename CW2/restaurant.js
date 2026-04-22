/* =========================
   MENU TOGGLE
========================= */
document.querySelectorAll(".dish-title").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);

    document.querySelectorAll(".dish-info").forEach(info => {
      if (info !== target) info.classList.remove("open");
    });

    target.classList.toggle("open");
  });
});

/* =========================
   RESERVATION MESSAGE
========================= */
const reservationForm = document.getElementById("reservationForm");
if (reservationForm) {
  reservationForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("reservationMsg").textContent =
      "Reservation received. We will contact you shortly.";
  });
}

/* =========================
   SCROLL PROGRESS
========================= */
const progressBar = document.getElementById("scrollProgress");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height =
      document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollTop / height) * 100 + "%";
  });
}

/* =========================
   FADE IN ON SCROLL
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* =========================
   FAQ ACCORDION
========================= */
document.querySelectorAll(".faq-btn").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");

    document.querySelectorAll(".faq-item").forEach(faq => {
      if (faq !== item) faq.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
