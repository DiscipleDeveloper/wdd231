const year = document.querySelector("#year-now")
const today = new Date();
year.innerHTML = today.getFullYear();

let show = document.querySelector("#lastModified");
show.textContent = document.lastModified