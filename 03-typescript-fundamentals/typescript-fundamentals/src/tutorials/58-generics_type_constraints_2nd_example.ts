// GENERICS - TYPE CONSTRAINTS SECOND EXAMPLE
type Car = {
  brand: string;
  model: string;
};

type Product = {
  name: string;
  price: number;
};

type Student = {
  name: string;
  age: number;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

const student: Student = {
  name: 'peter',
  age: 20,
};

// function printName<T extends Student | Product>(input: T): void {
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);
// printName(car); // Error, 'name' missing from car object
