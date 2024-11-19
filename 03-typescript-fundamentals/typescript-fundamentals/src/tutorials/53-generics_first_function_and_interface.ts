// GENERICS - FIRST FUNCTION AND INTERFACE
// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

// Generic function
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello world');
const someNumberValue = genericFunction<number>(2);

// Generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello world',
  getValue() {
    return this.value;
  },
};
