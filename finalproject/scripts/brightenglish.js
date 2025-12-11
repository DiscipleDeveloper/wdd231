
// Making a hamburger button
const menuButton = document.querySelector("#menu");
const ul = document.querySelector("ul");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open")
    ul.classList.toggle("open");
});

// Making dates 
const today = new Date();
const year = document.querySelector("#yearNow");
year.innerHTML = today.getFullYear();

let show = document.getElementById("lastModified")
show.textContent = document.lastModified

