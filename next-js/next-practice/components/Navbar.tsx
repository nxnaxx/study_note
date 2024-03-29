import Link from 'next/link';
import { useContext } from 'react';
import ThemeContext from './themeContext';

export default function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const newThemeName = theme === 'dark' ? 'light' : 'dark';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
      }}
    >
      <div>My Website</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={toggleTheme}>Set {newThemeName} theme</button>
      </div>
    </div>
  );
}
