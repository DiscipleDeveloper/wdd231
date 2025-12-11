import { createBookCards } from "../data/create-cards.mjs";

const bookCardParent = document.querySelector("#book-cards-parent");

async function getBooksData() {

    try {
        const response = await fetch("data/books.json");

        const data = await response.json();

        console.log(data.books);

        createBookCards(data.books, bookCardParent);
    }

    catch (error) {
        console.error(error);
    }
}

getBooksData()