// CLASSES - GETTERS AND SETTERS
class Book {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}

  // Getters
  get info() {
    return `${this.title} by ${this.author}`;
  }

  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true; // Call set method
    return `${this.title} by ${this.author}`;
  }

  // Setters
  // set checkOut(checkedOut: boolean) {
  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork.info); // Getter method
// deepWork.checkOut = true; // Setter method (Error, if the modify method is private)
console.log(deepWork);
console.log(deepWork.someInfo);
console.log(deepWork.checkOut);
