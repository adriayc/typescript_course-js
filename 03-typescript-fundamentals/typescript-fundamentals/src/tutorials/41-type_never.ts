// TYPE - NEVER
// const someValue: never = 0; // Error (Type Never is not assignable)

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme): void {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme; // theme is never
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    case Color.Green:
      return 'Green';
    default:
      // At build time
      let unexpectedColor: never = color;
      // At runtime
      throw new Error(`Unexpected color value: ${color}`);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
