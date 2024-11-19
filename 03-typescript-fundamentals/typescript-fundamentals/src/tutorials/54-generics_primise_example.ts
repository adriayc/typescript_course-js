// GENERICS - PROMISE EXAMPLE
// async function someFunc(): string {
// Generics with promise (Async/Await)
async function someFunc(): Promise<string> {
  return 'Hello world';
}
// async function someFunc(): Promise<number> {
//   return 123;
// }

const result = someFunc();
