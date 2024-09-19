"use client";
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useAppSelector } from '@/app/hooks'; 

const Contact = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <div className={`py-16 px-4 sm:px-8 border-t-2 ${isDarkMode ? 'border-gray-700' : 'border-secondary'} ${isDarkMode ? 'bg-secondary text-white' : ''}`} id='contact'>
      <h1 className={`text-2xl sm:text-4xl font-bold ${isDarkMode ? 'text-green-400' : 'text-secondary'} mb-8`}>Get In Touch.</h1>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        {/* Email Card */}
        <div className={`p-6 flex items-center space-x-4 w-full sm:w-1/3 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'}`}>
          <div className={`${isDarkMode ? 'bg-green-600' : 'bg-purple-600'} p-4 rounded-lg`}>
            <MdEmail size={24} />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-secondary'}`}>EMAIL</p>
            <p className="text-lg font-bold">teebliqs4@gmail.com</p>
          </div>
        </div>
        {/* Phone Card */}
        <div className={`p-6 flex items-center space-x-4 w-full sm:w-1/3 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'}`}>
          <div className={`${isDarkMode ? 'bg-green-600' : 'bg-purple-600'} p-4 rounded-lg`}>
            <FaPhone size={24} />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-secondary'}`}>PHONE</p>
            <p className="text-lg font-bold">+123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
