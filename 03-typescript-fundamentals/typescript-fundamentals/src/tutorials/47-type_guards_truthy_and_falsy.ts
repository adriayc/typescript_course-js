// TYPE GUARDS - TRUTHY AND FALSY
function printLength(str: string | null | undefined) {
  if (str) {
    // In this block, TypeScript knows that `str` is a string because `null` and `undefined` are falsy values.
    console.log(str.length);
  } else {
    console.log('no string provided');
  }
}

printLength('Hello'); // Output: truthy
printLength(''); // Output: falsy
printLength(null); // Output: falsy
printLength(undefined); // Output: falsy
printLength(); // Output: falsy
