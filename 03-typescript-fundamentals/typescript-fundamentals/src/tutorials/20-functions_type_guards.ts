// FUNCTIONS - TYPE GUARDS
function processInput(input: string | number) {
  // TypeOf (Type guards)
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase());
  }
}

processInput(10);
processInput('Hello');
