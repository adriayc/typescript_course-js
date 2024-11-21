// Custom hook (Context) and ThemeProvider
import { ThemeProvider, useTheme } from './context';

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);

  return (
    <div>
      <h2>React & TypeScript</h2>
      <h2>Context</h2>
    </div>
  );
}

export default ParentComponent;
