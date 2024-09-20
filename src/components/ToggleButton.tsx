"use client";
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { toggleTheme, setTheme } from '@/features/theme/themeSlice'; 
import { FaToggleOff } from 'react-icons/fa';

const ToggleButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  
  const [mounted, setMounted] = useState(false);  // State to track when component has mounted

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;  // Only proceed if the component is mounted
    
    const savedTheme = localStorage.getItem('theme');
    console.log('Loaded theme from localStorage:', savedTheme);
    if (savedTheme === 'dark') {
      dispatch(setTheme(true));  // Set dark mode if saved as dark
    } else {
      dispatch(setTheme(false)); // Set light mode if saved as light
    }
  }, [dispatch, mounted]);

  // Apply theme and save to localStorage only if the component is mounted
  useEffect(() => {
    if (!mounted) return;

    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    console.log('Saved theme to localStorage:', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, mounted]);

  if (!mounted) return null;  // Avoid rendering the button until mounted

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 bg-gray-300 hover:bg-gray-500 text-black dark:text-white rounded-full p-3 shadow-lg z-50"
      style={{ zIndex: 1000 }}
    >
      <FaToggleOff className={`text-xl ${isDarkMode ? 'text-yellow-500' : 'text-gray-800'}`} />
    </button>
  );
};

export default ToggleButton;
