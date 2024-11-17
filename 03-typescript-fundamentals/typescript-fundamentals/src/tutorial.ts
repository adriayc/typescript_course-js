// CHALLENGE - FUNCTIONS II
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.split('').reverse().join('').toUpperCase()
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', { reverse: true }));
