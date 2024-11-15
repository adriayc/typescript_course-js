// UNION TYPE
// Number | String
let tax: number | string = 10;
tax = 100;
tax = '$10';
// tax = true; // Error

// Literal Values
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random'; // Error
