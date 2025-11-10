const navigation = document.querySelector("nav ul");
const hamburgerButton = document.querySelector(".ham-button");


hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("open");
    navigation.classList.toggle("open");
})