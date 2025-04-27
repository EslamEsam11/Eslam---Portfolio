
//Derk moode
let darkMode = localStorage.getItem("darkMode");
const themeSwitch = document.getElementById("theme-switch");
const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");
};
const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};
if (darkMode === "active") enableDarkMode();
themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode")
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});

// Click links
let active = document.querySelector(".active");
let hover = document.querySelector(".hover");
let boxProjectsDark = document.querySelector(".boxProjectsDark");
let sections = {
  projectsClick: "projects",
  resumeClick: "resume",
  contactClick: "contact"
};
Object.keys(sections).forEach(clickId => {
  let clickElement = document.getElementById(clickId);
  clickElement.onclick = function () {
    // Hide all sections
    Object.values(sections).forEach(sectionId => {
      document.getElementById(sectionId).classList.add("hid");
    });
    // Show the clicked section
    document.getElementById(sections[clickId]).classList.remove("hid");
    // Update active and hover classes
    Object.keys(sections).forEach(id => {
      document.getElementById(id).classList.remove("active", "hover");
    });
    clickElement.classList.add("active", "hover");
  };
});

// 

let arrow = document.getElementById("arrow");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) { 
    arrow.classList.add("showArr");
    arrow.classList.remove("hide");
  } else {
    arrow.classList.remove("showArr");
    arrow.classList.add("hide");
  }
});
arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});