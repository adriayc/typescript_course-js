// CLASSES - INTRO
class Book {
  // Properties
  title: string;
  author: string;

  // Constructor
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork); // {title: 'Deep Work', author: 'Cal Newport'}
