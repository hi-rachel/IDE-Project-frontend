import { create } from 'zustand';
import { darkTheme, lightTheme } from '../styles/theme';

interface ThemeState {
  theme: typeof lightTheme | typeof darkTheme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('isDarkMode');
  if (storedTheme !== null) {
    return storedTheme === 'true' ? darkTheme : lightTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? darkTheme
    : lightTheme;
};

const useThemeStore = create<ThemeState>(set => ({
  theme: getInitialTheme(),
  isDarkMode: localStorage.getItem('isDarkMode') === 'true',
  toggleTheme: () => {
    set(state => {
      const newIsDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', newIsDarkMode ? 'true' : 'false');
      return {
        theme: newIsDarkMode ? darkTheme : lightTheme,
        isDarkMode: newIsDarkMode,
      };
    });
  },
}));

export default useThemeStore;
