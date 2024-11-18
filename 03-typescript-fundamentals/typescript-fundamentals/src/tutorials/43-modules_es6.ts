// MODULES - ES6
// import newStudent, { sayHello, person, Student } from './actions';
import newStudent, { sayHello, person, type Student } from './43-actions';

sayHello('TypeScript');
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};
console.log(anotherStudent);
