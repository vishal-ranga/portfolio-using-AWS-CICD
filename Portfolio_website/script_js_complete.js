// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop;
    if (scrollY >= top - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Navbar background tweak
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15,23,42,0.98)";
  } else {
    navbar.style.background = "rgba(15,23,42,0.9)";
  }
});

// Skills progress animation
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = skillsSection.querySelectorAll(".skill-progress");
          bars.forEach((bar) => {
            const progress = bar.getAttribute("data-progress");
            bar.style.width = progress + "%";
          });
          observer.unobserve(skillsSection);
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(skillsSection);
}

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileMenuToggle.querySelector("i");
    if (!icon) return;
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        const icon = mobileMenuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });
}

// Contact form handler using mailto
function handleContactSubmit() {
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:vishalranga222@gmail.com?subject=${subject}&body=${body}`;
  alert("Thank you! Your email client will open with the message.");
}

// Expose function to global scope
window.handleContactSubmit = handleContactSubmit;

// Console message
console.log(
  "%cWelcome to my portfolio",
  "background:#3b82f6;color:white;font-size:16px;padding:6px 10px;font-weight:bold"
);
console.log(
  "%cBuilt with HTML, CSS, JS, AWS S3, and GitHub Actions",
  "background:#020617;color:#93c5fd;font-size:12px;padding:4px 8px"
);
