import React, { createContext, useState, useContext } from 'react';

// Create Theme Context
export const ThemeContext = createContext();

// Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default to 'dark'

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

    // Update CSS variables dynamically
    document.documentElement.style.setProperty(
      '--background-color',
      theme === 'dark' ? '#FFFFFF' : '#000000'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      theme === 'dark' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for consuming the theme
export const useTheme = () => useContext(ThemeContext);
