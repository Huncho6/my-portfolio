import React from 'react';
import { useAppSelector } from '@/app/hooks'; // assuming the same theme selector is used

const Footer = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode); // Add dark mode selector

  return (
    <div className={`p-6 border-t-2 ${isDarkMode ? 'border-gray-700' : 'border-secondary'}`}>
      <div className="flex justify-center text-xl font-semibold">
        &copy; Ibrahim 2024
      </div>
    </div>
  );
};

export default Footer;
