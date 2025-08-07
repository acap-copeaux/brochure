// script.js
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Appliquer le thème sauvegardé
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(`${savedTheme}-theme`);
  themeToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";

  // Switch du thème
  themeToggle.addEventListener("click", () => {
    const isLight = body.classList.contains("light-theme");
    body.classList.toggle("light-theme", !isLight);
    body.classList.toggle("dark-theme", isLight);
    localStorage.setItem("theme", isLight ? "dark" : "light");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });
});
