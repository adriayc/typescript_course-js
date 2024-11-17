// INTERFACE - FUNDAMENTALS
interface Book {
  isbn: number;
  title: string;
  author: string;
  genre?: string; // ? - optional property
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  // genre: 'self-help', // Optional property
  // price: 100, // Error
};

// deepWork.isbn = 'some value'; // Error
