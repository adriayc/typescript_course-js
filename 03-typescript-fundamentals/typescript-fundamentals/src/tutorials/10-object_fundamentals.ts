// OBJECT FUNDAMENTALS
let car: { brand: string; year: number } = {
  brand: 'toyota',
  year: 2020,
};
// let car: { brand: string; year: number } = { brand: 'toyota', year: 2020, color: 'blue' }; // Error
car.brand = 'ford';
// car.color = 'blue'; // Error

let car1: { brand: string; year: number } = {
  brand: 'audi',
  year: 2022,
};

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]; // ? - optional property
// items[0].title = 'new book'; // Error, title is readonly
