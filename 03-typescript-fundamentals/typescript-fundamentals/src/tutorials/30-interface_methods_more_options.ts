// INTERFACE METHODS - MORE OPTIONS
interface Book {
  isbn: number;
  title: string;
  author: string;
  genre?: string; // ? - optional property
  // Methods
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  // Methods
  // printAuthor() {
  //   console.log(this.author);
  // },
  printAuthor: () => {
    console.log(deepWork.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // First option
  printSomething: function (someValue) {
    return someValue;
  },
  // Second option
  // printSomething: (someValue) => {
  //   // console.log(this); // Catch the global THIS
  //   console.log(deepWork.author); // Get author
  //   return someValue;
  // },
  // Third option
  // printSomething(someValue) {
  //   return someValue;
  // },
};

console.log(deepWork.printSomething(34));
deepWork.printAuthor();
