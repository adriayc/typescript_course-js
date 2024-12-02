// TYPE ASSERTION
let someValue: any = 'this is a string';

// as (Type assertion)
// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as String).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"name": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};

// Save Status.Pending in the DB as a string
// retrieve string form the DB
const statusValue = 'pending';

const user: User = { name: 'john', status: statusValue as Status };
