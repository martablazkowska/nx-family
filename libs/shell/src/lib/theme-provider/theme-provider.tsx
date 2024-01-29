'use client';
import { createContext, useState, useEffect } from 'react';

import {
  Mode,
  ThemeProviderProps,
  IThemeContext,
} from './theme-provider.types';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<Mode>('dark');

  const toggle = (prev: Mode) => {
    setMode(prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
