const today = new Date();
const year = document.querySelector("#yearNow");
year.innerHTML = today.getFullYear();

let show = document.getElementById("lastModified")
show.textContent = document.lastModified