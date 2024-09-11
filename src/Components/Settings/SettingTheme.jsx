// const SettingTheme = () =>{
//     return(
//         <>
//         <div className="settings-card">
//             <div className="settings-content">
//                 <h2 className="settings-title">Theme</h2>
//                 <p className="settings-description">Toggle between Light Mode and Dark Mode to adjust the appearance based on your preference.</p>
//                 <span className="settings-link">Dark Mode</span>
//             </div>
//         </div>
//         </>
//     )
// }

// export default SettingTheme;


import React, { useState, useEffect } from 'react';

const SettingTheme = () => {
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

  return(
    <>
    <div className="settings-card">
        <div className="settings-content">
            <h2 className="settings-title">Theme</h2>
            <p className="settings-description">Toggle between Light Mode and Dark Mode to adjust the appearance based on your preference.</p>
            <span className="settings-theme-link" onClick={toggleTheme}>
            <i className={darkMode ? 'fas fa-sun icon' : 'fas fa-moon icon'}></i>
            {darkMode ? 'Light theme' : 'Dark theme'}
            </span>
        </div>
    </div>
    </>
)
}

{/* <button className="theme" onClick={toggleTheme}>
        <i className={darkMode ? 'fas fa-sun icon' : 'fas fa-moon icon'}></i>
        {darkMode ? 'Light theme' : 'Dark theme'}
      </button> */}

export default SettingTheme;