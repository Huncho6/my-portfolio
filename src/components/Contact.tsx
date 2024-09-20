"use client";
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useAppSelector } from '@/app/hooks'; 

const Contact = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`py-8 px-4 sm:py-16 sm:px-8 border-t-2 ${isDarkMode ? 'border-gray-700' : 'border-secondary'} ${isDarkMode ? 'bg-secondary text-white' : ''}`} id="contact">
      <h1 className={`text-2xl sm:text-4xl font-bold ${isDarkMode ? 'text-green-400' : 'text-secondary'} mb-8`}>Get In Touch.</h1>

      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Email Card */}
        <div className={`p-6 rounded-lg flex items-center space-x-4 sm:w-1/2 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'} animate-fade-in`}>
          <div className={`${isDarkMode ? 'bg-green-600' : 'bg-purple-600'} p-4 rounded-lg`}>
            <MdEmail size={24} />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-secondary'}`}>EMAIL</p>
            <p className="text-lg font-bold">teebliqs4@gmail.com</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className={`p-6 rounded-lg flex items-center space-x-4 sm:w-1/2 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'} animate-fade-in`}>
          <div className={`${isDarkMode ? 'bg-green-600' : 'bg-purple-600'} p-4 rounded-lg`}>
            <FaPhone size={24} />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-secondary'}`}>PHONE</p>
            <p className="text-lg font-bold">+2348149602710</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-8">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>        
            <label htmlFor="Name" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Name</label>
            <input 
              type="text" 
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Enter your name" 
            />
          </div>
          <div>        
            <label htmlFor="Phone" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Phone No</label>
            <input 
              type="number" 
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Enter your Phone Number" 
            />
          </div>
          <div>        
            <label htmlFor="Subject" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Subject</label>
            <input 
              type="text" 
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Subject" 
            />
          </div>
          <div>        
            <label htmlFor="Subject" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Message</label>
            <input 
              type="text" 
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Write A Message" 
            />
          </div>        
        </form>
        
        {/* Submit Button */}
        <button className={`mt-8 sm:mt-20 mb-10 w-full sm:w-52 h-12 sm:h-16 rounded-full ${isDarkMode ? 'bg-green-800 text-white' : 'bg-green-900'} animate-fade-in`}>
          Submit
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-8">
        <img 
          src="https://res-console.cloudinary.com/dh60kpxg5/thumbnails/v1/image/upload/v1726200865/YWdlZ2VfeGg2ejJn/preview" 
          alt="Agege" 
          className="rounded-md shadow-lg animate-fade-in-scale max-w-full sm:w-auto"
        />
      </div>
    </div>
  );
}

export default Contact;
