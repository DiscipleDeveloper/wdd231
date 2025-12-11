export function createBookCards(books, parentTag) {

    books.forEach(book => {
        let bookCard = document.createElement("section");

        let bookTitle = document.createElement("h2");
        bookTitle.textContent = `${book.name}`;

        let bookDescription = document.createElement("h3");
        bookDescription.textContent = `Description: ${book.description}`

        let bookPerk = document.createElement("p");
        bookPerk.textContent = `Purpose: ${book.how_it_helps}`;

        let bookPerkViet = document.createElement("p");
        bookPerkViet.textContent = `Mục đích: ${book.how_it_helps_vi}`;

        let bookImg = document.createElement("img");
        bookImg.setAttribute("src", book.image);
        bookImg.setAttribute("alt", book.name);
        bookImg.setAttribute("loading", "lazy");
        bookImg.setAttribute("height", "395");
        bookImg.setAttribute("width", "300");

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookImg);
        bookCard.appendChild(bookDescription);
        bookCard.appendChild(bookPerk);
        bookCard.appendChild(bookPerkViet);

        parentTag.appendChild(bookCard);
    })
}