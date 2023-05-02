import { useState } from 'react';
import './app.css'
import Clock from './components/Clock';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <Header actionClick={toggleTheme} text={theme === 'light' ? '☼' : '☾'} />
      <Clock colorLetter={theme} />
      <Footer colorLetter={theme} />
    </div>
  );
}

export default App;
