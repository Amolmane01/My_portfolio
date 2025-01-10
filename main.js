// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
workheader.style.color = "var(--text-color)";
educationheader.style.color = "var(--first-color)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  if (!condition1) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-color)";
    educationheader.style.color = "var(--first-color)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("qualification-inactive");
  if (!condition2) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-color)";
    workheader.style.color = "var(--first-color)";
  }
});

// SKILL&TOOL

let toolTab = document.getElementById('toolTab');         // Add this line
let languageTab = document.getElementById('languageTab'); // Add this line
toolTab.style.color = "var(--text-color)";
  languageTab.style.color = "var(--first-color)";
document.getElementById('toolContent').style.display = 'none';

document.getElementById('languageTab').addEventListener('click', function() {
  document.getElementById('languageContent').style.display = 'block';
  document.getElementById('toolContent').style.display = 'none';
  toolTab.style.color = "var(--text-color)";
  languageTab.style.color = "var(--first-color)";
  
  

});

document.getElementById('toolTab').addEventListener('click', function() {
  document.getElementById('toolContent').style.display = 'block';
  document.getElementById('languageContent').style.display = 'none';
  languageTab.style.color = "var(--text-color)";
  toolTab.style.color = "var(--first-color)";
});

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeToggleBtn.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}


