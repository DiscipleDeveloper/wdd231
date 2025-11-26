const gold = document.querySelector("#gold-button");
const goldD = document.querySelector("#gold-perk");
const goldX = document.querySelector("#goldX");

const silver = document.querySelector("#silver-button");
const silverD = document.querySelector("#silver-perk");
const silverX = document.querySelector("#silverX");

const bronze = document.querySelector("#bronze-button");
const bronzeD = document.querySelector("#bronze-perk");
const bronzeX = document.querySelector("#bronzeX");

const free = document.querySelector("#free-button");
const freeD = document.querySelector("#free-perk");
const freeX = document.querySelector("#freeX");

function accessDialogue(learnMore, dialogue, close) {
    learnMore.addEventListener("click", () => {
        dialogue.showModal();
    })
    close.addEventListener("click", () => {
        dialogue.close();
    });
}

accessDialogue(gold, goldD, goldX);
accessDialogue(silver, silverD, silverX);
accessDialogue(bronze, bronzeD, bronzeX);
accessDialogue(free, freeD, freeX);

document.addEventListener("DOMContentLoaded", () => {
    const timeStamp = document.querySelector("#timestamp");
    timeStamp.value = new Date();
});





