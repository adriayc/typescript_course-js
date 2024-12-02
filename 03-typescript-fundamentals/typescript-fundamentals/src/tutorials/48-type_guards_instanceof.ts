// TYPE GUARDS - INSTANCEOF
try {
  throw 'some error';
  // throw new Error('This is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an error object: ${error.message}`);
  } else {
    console.log('unknown error...');
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random = checkInput('2020-05-06');

console.log(year);
console.log(random);
