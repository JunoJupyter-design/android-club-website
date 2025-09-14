//Highlight the current navigation link while scrolling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section");
  const scrollY = window.scrollY + 100; // offset for fixed header

  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav__link[href="#${id}"]`);

    if (link) {
      if (
        scrollY >= section.offsetTop &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

//Smooth scroll for anchor links (optional: polyfill for older browsers)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#") && targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close mobile menu after clicking a link
      const navToggle = document.getElementById("nav-toggle");
      if (navToggle && navToggle.checked) {
        navToggle.checked = false;
      }
    }
  });
});

//Add a subtle animation to project cards when they enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".project-card").forEach((card) => observer.observe(card));

//Optional: Show the current year automatically in footer
const footerYear = document.querySelector(".footer p");
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} Android Club. All Rights Reserved.`;
}