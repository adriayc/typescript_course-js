// TUPLE
let person: [string, number] = ['john', 25];

// let date: [number, number, number] = [12, 18, 2020];
// Read only
let date: readonly [number, number, number] = [12, 18, 2020];
// date.push('hello'); // Error
// date.push(34); // Error (readonly)
console.log(date);

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

// Optional parameter
let susan: [string, number?] = ['susan'];
