// CHALLENGE - OBJECT
let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 };
// bike.year = 'old'; // Error

let laoptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laoptop2: { brand: string; year: number } = { brand: 'HP' }; // Error

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };

let products: { title: string; price?: number }[] = [product1, product2];
products.push({ title: 'shoes' });
// products.push({ title: 'shoes', price: 'expensive' }); // Error
