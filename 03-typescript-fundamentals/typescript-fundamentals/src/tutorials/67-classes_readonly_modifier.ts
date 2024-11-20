// CLASSES - DEFAULT PROPERTY
class Book {
  readonly title: string; // Read only
  author: string;
  checkedOut: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
// deepWork.title = 'something else'; // Error
console.log(deepWork.title);
