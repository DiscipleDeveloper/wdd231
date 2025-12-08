
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

//Populate Select Option
const select = document.querySelector("select");

const times = [
    {
        id: "6",
        name: "6:00 - 6:30"
    },
    {
        id: "6:30",
        name: "6:30 - 7:00"
    },
    {
        id: "7",
        name: "7:00 - 7:30"
    },
    {
        id: "7:30",
        name: "7:30 - 8:00"
    },
    {
        id: "8",
        name: "8:00 - 8:30"
    },
    {
        id: "8:30",
        name: "8:30 - 9:00"
    },
    {
        id: "9",
        name: "9:00 - 9:30"
    },
    {
        id: "9:30",
        name: "9:30 - 10:00"
    }
];

times.forEach(time => {
    const option = document.createElement("option");
    option.innerHTML = `${time.name}pm GMT+7`; //Used template literals here
    option.setAttribute("value", time.id);
    select.appendChild(option);
})


const radio = document.querySelectorAll('input[name="platform"]');


function storeData(data) {
    data.forEach(value => {
        value.addEventListener("change", () => {
            localStorage.setItem("platformUse", value.value);
        })
    })
}
storeData(radio);
const form = document.querySelector("form");

form.addEventListener("submit", () => {
    form.reset()
})
