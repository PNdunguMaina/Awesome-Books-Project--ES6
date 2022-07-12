/* eslint-disable linebreak-style */
import { Book } from './modules/main.js';
import { Store } from './modules/storage.js';
import { UI } from './modules/UI.js';
import * as timeZone from './modules/date.js';

// set timezone
const dateTime = document.getElementById('time-zone');

dateTime.innerHTML = `
<p>${timeZone.date} <br> ${timeZone.hour}:${timeZone.min}:${timeZone.sec}</p>`;

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('form').addEventListener('submit', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBookToList(book);
  Store.addBook(book);
  UI.clearFields();
});
document.querySelector('.book-container').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

// single page application
// link variables
const list = document.getElementById('list-link');
const form = document.getElementById('form-link');
const contact = document.getElementById('contact-link');
const home = document.getElementById('home-link');
// different sections variables
const booksList = document.getElementById('books-list');
const inputForm = document.getElementById('list-form');
const contactSection = document.getElementById('contact-us');
const homePage = document.getElementById('home-page');

// events
list.addEventListener('click', () => {
  booksList.style.display = 'block';
  inputForm.style.display = 'none';
  contactSection.style.display = 'none';
  homePage.style.display = 'none';
});
form.addEventListener('click', () => {
  booksList.style.display = 'none';
  inputForm.style.display = 'contents';
  contactSection.style.display = 'none';
  homePage.style.display = 'none';
});
contact.addEventListener('click', () => {
  booksList.style.display = 'none';
  inputForm.style.display = 'none';
  contactSection.style.display = 'flex';
  homePage.style.display = 'none';
});

home.addEventListener('click', () => {
  homePage.style.display = 'flex';
  booksList.style.display = 'none';
  inputForm.style.display = 'none';
  contactSection.style.display = 'none';
});
