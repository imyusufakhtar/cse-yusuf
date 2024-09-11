import React, { useState, useEffect } from 'react';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode);
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
    <>
      <button className="theme" onClick={toggleTheme}>
        <i className={darkMode ? 'fas fa-sun icon' : 'fas fa-moon icon'}></i>
        {darkMode ? 'Light theme' : 'Dark theme'}
      </button>
    </>
  );
};

export default Theme;

