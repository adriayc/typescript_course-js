// CLASSES - DEFAULT PROPERTY
class Book {
  title: string;
  author: string;
  // Default property
  // checkedOut: boolean;
  // checkedOut: boolean = false;
  checkedOut = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    // this.checkedOut = false;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
deepWork.checkedOut = true;
// deepWork.checkedOut = 'hello world'; // Error
console.log(deepWork.checkedOut);
