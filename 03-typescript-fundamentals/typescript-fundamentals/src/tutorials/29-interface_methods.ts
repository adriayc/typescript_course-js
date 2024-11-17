// INTERFACE - METHODS
interface Book {
  isbn: number;
  title: string;
  author: string;
  genre?: string; // ? - optional property
  // Methods
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  // Methods
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

deepWork.printAuthor();
const result = deepWork.printTitle('is an awesome book');
console.log(result);
