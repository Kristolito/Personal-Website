const header = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav__link");
const themeButton = document.getElementById("theme-button");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function handleHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

function closeMenu() {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function setActiveLink() {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav__link[href="#${id}"]`);

    if (!link) return;

    const isActive = scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight;

    link.classList.toggle("active", isActive);
  });
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.querySelector("i").className = "bx bx-sun";
  }
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeButton.querySelector("i").className = isDark ? "bx bx-sun" : "bx bx-moon";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "krislito.com"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    submitButton.textContent = "Opening email...";
    formStatus.className = "form-status";
    formStatus.textContent = "Your email app should open with the message ready to send.";

    window.location.href = `mailto:kristolito@hotmail.co.uk?subject=${subject}&body=${body}`;

    setTimeout(() => {
      submitButton.textContent = "Open email draft";
      formStatus.className = "form-status is-success";
      formStatus.textContent = "Email draft opened. Please press send in your email app.";
    }, 800);
  });
}

window.addEventListener("scroll", () => {
  handleHeader();
  setActiveLink();
});

applyStoredTheme();
handleHeader();
setActiveLink();
