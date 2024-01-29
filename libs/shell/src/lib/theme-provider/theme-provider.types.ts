import { ReactNode } from 'react';

export type Mode = 'dark' | 'light';

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface IThemeContext {
  mode: Mode;
  toggle: (val: Mode) => void;
}
