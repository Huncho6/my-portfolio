// components/ToggleButton.tsx
"use client";
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { toggleTheme } from '@/features/theme/themeSlice';
import { FaToggleOff } from 'react-icons/fa';

const ToggleButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  React.useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

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
