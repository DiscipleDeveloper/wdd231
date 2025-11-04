
const navButton = document.querySelector("#nav-button");
const navContent = document.querySelector("nav ul")

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navContent.classList.toggle("show");
})