// FUNCTIONS - REST PARAMETER
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  // console.log(doubled);
  const total = doubled.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return `${message}${total}`;
}

let result = sum('The total is: ', 1, 2, 3, 4, 5);
console.log(result);
