// PRACTICAL EXAMPLE
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    //   if (book === '1985') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    console.log(foundBook.length);
    break;
  }
}
// foundBook = 10; // Error
console.log(foundBook);
console.log(foundBook?.length);
