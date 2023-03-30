import Navbar from '@/components/Navbar';
import ThemeContext from '@/components/themeContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

type AppProps = {};

const themes = {
  dark: {
    background: '#000',
    color: '#fff',
  },
  light: {
    background: '#fff',
    color: '#000',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ width: '100%', minHeight: '100vh', ...themes[theme] }}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}
