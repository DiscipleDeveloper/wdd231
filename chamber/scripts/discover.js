import { sanMateo } from '../data/sanmateo.mjs'

const catholic = document.querySelector("#catholic");
const isu = document.querySelector("#isu");
const highschool = document.querySelector("#highschool");
const pnp = document.querySelector("#pnp");
const municipal = document.querySelector("#municipal");
const park = document.querySelector("#park");
const munggo = document.querySelector("#munggo-festival");
const lds = document.querySelector("#lds");


function makeCard(html, data) {
    let discoverTitle = document.createElement("h2");
    let place = document.createElement("address");
    let desc = document.createElement("p");
    let button = document.createElement("button");

    discoverTitle.textContent = data.name;
    place.textContent = data.address;
    desc.textContent = data.description;
    button.textContent = `Learn More`;

    html.appendChild(discoverTitle);
    html.appendChild(place);
    html.appendChild(desc);
    html.appendChild(button);
}

makeCard(catholic, sanMateo[0]);
makeCard(isu, sanMateo[1]);
makeCard(highschool, sanMateo[2]);
makeCard(pnp, sanMateo[3]);
makeCard(municipal, sanMateo[4]);
makeCard(park, sanMateo[5]);
makeCard(munggo, sanMateo[6]);
makeCard(lds, sanMateo[7]);


const discoverDisplay = document.querySelector("#discover-message");

let lastVisit = localStorage.getItem('lastVisit')
let now = Date.now();
const oneDay = 86400000;

let message = "";

if (!lastVisit) {
    message = `Welcome! Let us know if you have any questions.`
}

else {
    const diff = now - Number(lastVisit);
    const daysPassed = Math.floor(diff / oneDay);

    if (daysPassed < 1) {
        message = `Back so soon. Awesome!`
    }

    else {
        message = `You last visited ${daysPassed} day(s) ago`
    }
}

localStorage.setItem('lastVisit', now);

discoverDisplay.textContent = message;