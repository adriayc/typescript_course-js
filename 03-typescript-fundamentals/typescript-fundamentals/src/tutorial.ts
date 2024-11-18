// MODULES - JS FILE
import newStudent, { sayHello, person, type Student } from './actions';
// import { someValue } from './example.js'; // Third party libraries ()

sayHello('TypeScript');
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};
console.log(anotherStudent);
