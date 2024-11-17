// INTERSECTION TYPE
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number }; // & (Intersection Type)

const book1: Book = {
  id: 1,
  name: 'how to cook a dragon',
  price: 15,
};
const book2: Book = {
  id: 2,
  name: 'the secret life of unicorns',
  price: 18,
};

// & (Intersection Type)
// const discountedBook: Book & { discount: number } = {
const discountedBook: DiscountedBook = {
  id: 3,
  name: 'gnomes vs. goblins: the ultimate guide',
  price: 25,
  discount: 0.15,
};
