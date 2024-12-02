// INTERFACE - MERGE AND EXTEND
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merge
interface Person {
  age: number;
}

// Extends (A single interface)
interface Employee extends Person {
  employeeId: number;
}

const person: Person = {
  name: 'john',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.getDetails());

const employee: Employee = {
  employeeId: 123,
  name: 'jane',
  age: 28,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

// Extends (Multiple interfaces)
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'bob',
  age: 35,
  dogName: 'rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};

manager.managePeople();
