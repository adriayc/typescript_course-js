// CLASSES - IMPLEMENT INTERFACE
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const hipster = new Person('shakeAndBake', 35);
hipster.greet();
