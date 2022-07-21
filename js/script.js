const body = document.querySelector("body");
body.addEventListener("click", toggleColor);

function toggleColor(e) {
  body.classList.toggle("dark");
}
