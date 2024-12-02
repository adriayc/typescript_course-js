// TYPE INFERENCE
// String
let awesomeName = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20; // Error
console.log(awesomeName);

// Number
let amount = 20;
amount = 12 - 1;
// amount = 'pants'; // Error

// Boolean
let isAwesome = true;
isAwesome = false;
// isAwesome = 'shakeAndBake'; // Error
