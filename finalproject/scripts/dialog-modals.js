const goldModal = document.querySelector("#gold-modal");
const silverModal = document.querySelector("#silver-modal");
const bronzeModal = document.querySelector("#bronze-modal");

const closeGold = document.querySelector("#close-gold");
const closeSilver = document.querySelector("#close-silver");
const closeBronze = document.querySelector("#close-bronze");

const gold = document.querySelector("#gold");
const silver = document.querySelector("#silver");
const bronze = document.querySelector("#bronze")

function createModal(modal, close, div) {
    div.addEventListener("click", () => {
        modal.showModal();
    })

    close.addEventListener("click", () => {
        modal.close();
    })
}

createModal(goldModal, closeGold, gold);
createModal(silverModal, closeSilver, silver);
createModal(bronzeModal, closeBronze, bronze);