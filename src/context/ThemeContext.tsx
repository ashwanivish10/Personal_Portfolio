import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'theme1' | 'theme2' | 'theme3' |'theme4' | 'theme5';

interface ThemeContextType {
  theme: Theme;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('theme1');

  const cycleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case 'theme1':
          return 'theme2';
        case 'theme2':
          return 'theme3';
        case 'theme3':
          return 'theme4';
        case 'theme4':
          return 'theme5';
        case 'theme5':
          return 'theme1';
        default:
          return 'theme4';
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};