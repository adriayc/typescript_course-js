// ARRAYS
// Number
let prices: number[] = [100, 75, 42];
// let prices: number[] = [100, 75, 42, 'hello']; // Error
// prices.push('hello'); // Error

// String
let fruit: string[] = ['apple', 'orange'];

// Be careful "[]" means literally empty array
// let random: [] = ['hello']; // Error
// let emptyValues = [];
let emptyValues: number[] = [];

// Inferred array type
let names = ['peter', 'susan', 1];
let array: (string | boolean)[] = ['apple', true, 'orange', false];
