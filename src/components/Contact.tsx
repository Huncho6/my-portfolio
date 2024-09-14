"use client";
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useAppSelector } from '@/app/hooks'; 

const Contact = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode); 

  return (
    <div className={`py-16 px-8 border-t-2 ${isDarkMode ? 'border-gray-700' : 'border-secondary'} ${isDarkMode ? 'bg-secondary text-white' : ''}`} id='contact'>
      <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-green-400' : 'text-secondary'} mb-8`}>Get In Touch.</h1>

      <div className="flex space-x-8">
        
        {/* Email Card */}
        <div className={`p-6 rounded-lg flex items-center space-x-4 w-1/3 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'} animate-fade-in`}>
          <div className={`${isDarkMode ? 'bg-green-600' : 'bg-purple-600'} p-4 rounded-lg`}>
            <MdEmail size={24} />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-secondary'}`}>EMAIL</p>
            <p className="text-lg font-bold">teebliqs4@gmail.com</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className={`p-6 rounded-lg flex items-center space-x-4 w-1/3 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'} animate-fade-in`}>
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
      <div>
        <form className="grid grid-cols-2">
          <div>        
            <label htmlFor="Name" className={`block mt-8 font-medium text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Name</label>
            <input 
              type="text" 
              className={`border-b-2 w-64 h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Enter your name" 
            />
          </div>
          <div>        
            <label htmlFor="Phone" className={`block mt-8 font-medium text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Phone No</label>
            <input 
              type="Number" 
              className={`border-b-2 w-64 h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Enter your Phone Number" 
            />
          </div>
          <div>        
            <label htmlFor="Subject" className={`block mt-8 font-medium text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Subject</label>
            <input 
              type="text" 
              className={`border-b-2 w-64 h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Subject" 
            />
          </div>
          <div>        
            <label htmlFor="Message" className={`block mt-8 font-medium text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Message</label>
            <input 
              type="textarea" 
              className={`border-b-2 w-64 h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Message" 
            />
          </div>
        </form>
        
        {/* Submit Button */}
        <button className={`mt-20 mb-16 w-52 h-16 rounded-full ${isDarkMode ? 'bg-green-800 text-white' : 'bg-green-900'} animate-fade-in`}>
          Submit
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img 
          src="https://res-console.cloudinary.com/dh60kpxg5/thumbnails/v1/image/upload/v1726200865/YWdlZ2VfeGg2ejJn/preview" 
          alt="Agege" 
          className="rounded-md shadow-lg animate-fade-in-scale"
        />
      </div>
    </div>
  );
}

export default Contact;
