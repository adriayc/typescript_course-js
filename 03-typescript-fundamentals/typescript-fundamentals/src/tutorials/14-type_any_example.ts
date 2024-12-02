// TYPE: ANY EXAMPLE
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

someValue.myMethod(); // Error, myMethod is not a function (type any)
