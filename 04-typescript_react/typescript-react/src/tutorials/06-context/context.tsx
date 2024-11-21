import { createContext, useContext } from 'react';

// Create context
// const ThemeProviderContext = createContext<string | undefined>(undefined);
const ThemeProviderContext = createContext<{ name: string } | undefined>(
  undefined
);

// Define provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProviderContext.Provider value="hello">
    <ThemeProviderContext.Provider value={{ name: 'hello' }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Define custom hook (Context)
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context == undefined)
    throw new Error('useTheme must be used within the ThemeProvider');
  return context;
};
