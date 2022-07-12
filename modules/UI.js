// Display Books
export class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector(".book-container");
    const addedbook = document.createElement("div");
    addedbook.innerHTML = `
      <div class="texts">
          <p>"${book.title}" by </p>
          <p>${book.author}</p>
          </div>
          <button type="submit" class="delete">Remove</button>
          <hr>
          </div>
        `;
    list.appendChild(addedbook);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
  }
}
