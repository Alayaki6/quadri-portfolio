// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu =
      navLinks.contains(event.target);

    const clickedButton =
      menuToggle.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedButton &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });
}


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 40) {

    navbar.style.background =
      "rgba(7, 7, 10, 0.92)";

  } else {

    navbar.style.background =
      "rgba(7, 7, 10, 0.72)";

  }

});
