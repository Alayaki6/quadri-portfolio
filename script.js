// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

          revealObserver.unobserve(
            entry.target
          );

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


window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;


    if (window.scrollY > 50) {

      navbar.style.background =
        "rgba(7, 7, 10, 0.94)";

      navbar.style.boxShadow =
        "0 10px 30px rgba(0, 0, 0, 0.25)";

    } else {

      navbar.style.background =
        "rgba(7, 7, 10, 0.72)";

      navbar.style.boxShadow =
        "none";

    }

  }
);


// =========================================
// TYPING EFFECT
// =========================================

const typingElement =
  document.querySelector(
    ".typing-text"
  );


const phrases = [
  "digital experiences.",
  "web applications.",
  "useful software.",
  "modern solutions."
];


let phraseIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

  if (!typingElement) return;


  const currentPhrase =
    phrases[phraseIndex];


  if (!deleting) {

    typingElement.textContent =
      currentPhrase.substring(
        0,
        characterIndex + 1
      );

    characterIndex++;


    if (
      characterIndex ===
      currentPhrase.length
    ) {

      deleting = true;

      setTimeout(
        typeEffect,
        1700
      );

      return;

    }

  } else {

    typingElement.textContent =
      currentPhrase.substring(
        0,
        characterIndex - 1
      );

    characterIndex--;


    if (characterIndex === 0) {

      deleting = false;

      phraseIndex =
        (phraseIndex + 1) %
        phrases.length;

    }

  }


  const speed =
    deleting ? 45 : 80;


  setTimeout(
    typeEffect,
    speed
  );

}


if (typingElement) {

  setTimeout(
    typeEffect,
    900
  );

}


// =========================================
// PROJECT 3D TILT
// =========================================

const projectScreen =
  document.querySelector(
    ".project-screen"
  );


if (
  projectScreen &&
  window.innerWidth > 700
) {

  projectScreen.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        projectScreen.getBoundingClientRect();


      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;


      const rotateX =
        ((y - centerY) / centerY) * -4;


      const rotateY =
        ((x - centerX) / centerX) * 5;


      projectScreen.style.transform =
        `rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    }
  );


  projectScreen.addEventListener(
    "mouseleave",
    () => {

      projectScreen.style.transform =
        "rotateY(5deg) rotateX(3deg)";

    }
  );

}


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections =
  document.querySelectorAll(
    "section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


window.addEventListener(
  "scroll",
  () => {

    let currentSection = "";


    sections.forEach(
      (section) => {

        const sectionTop =
          section.offsetTop - 160;


        const sectionHeight =
          section.offsetHeight;


        if (
          window.scrollY >= sectionTop &&
          window.scrollY <
            sectionTop + sectionHeight
        ) {

          currentSection =
            section.getAttribute("id");

        }

      }
    );


    navLinks.forEach(
      (link) => {

        link.style.color = "";


        if (
          link.getAttribute("href") ===
          `#${currentSection}`
        ) {

          link.style.color =
            "#a78bfa";

        }

      }
    );

  }
);


// =========================================
// BUTTON PRESS EFFECT
// =========================================

const buttons =
  document.querySelectorAll(
    ".btn"
  );


buttons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        button.style.transform =
          "scale(0.97)";


        setTimeout(
          () => {

            button.style.transform =
              "";

          },
          120
        );

      }
    );

  }
);


// =========================================
// FOOTER YEAR
// =========================================

const footer =
  document.querySelector("footer p");


if (footer) {

  footer.textContent =
    `© ${new Date().getFullYear()} Quadri Alayaki`;

}
