"use client";
import { useAppSelector } from '@/app/hooks';

const Projects = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <div className="px-8 py-16  border-t-2 border-tertiary ">
      <h1 className={`font-bold text-4xl mb-12 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>Selected Works.</h1>
      
      {/* Project 1 */}
      <div className={` ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'} rounded-lg overflow-hidden shadow-lg mb-12 flex h-[300px] animate-slide-in-left`} id='projects'>
        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-black'} text-center px-4 py-2 rounded-tl-lg rounded-bl-lg`}>
          <p className={`text-lg font-bold ${isDarkMode ? 'bg-light text-black' : 'bg-light text-black'}`}>2024</p>
          <p className={`text-sm ${isDarkMode ? 'bg-light text-black' : 'bg-light text-black'}`}>August</p>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-2/3">
          <div>
            <h2 className={`font-bold text-2xl mb-4 ${isDarkMode ? 'bg-light text-green-500' : 'bg-light text-black'}`}>E-Commerce</h2>
            <p className={`mb-6 ${isDarkMode ? 'bg-light text-green-500' : 'bg-light text-black'}`}>
              This is a modern React-based e-commerce platform showcasing a sleek interface with a minimalist design. It includes product listings and responsive navigation, optimized for quick product browsing.
            </p>
          </div>
          <a href="https://ec-react-one.vercel.app/" target="_blank" className="text-green-500 font-bold hover:underline">Read More →</a>
        </div>

        {/* Image */}
        <div className="w-1/3">
          <img 
            src="https://res-console.cloudinary.com/dh60kpxg5/thumbnails/v1/image/upload/v1726192994/a2lja3NfcjV4aDhw/preview" 
            alt="E-commerce" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Project 2 */}
      <div className={` ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'} rounded-lg overflow-hidden shadow-lg flex h-[300px] animate-slide-in-right`}>
        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-black'} text-center px-4 py-2 rounded-tl-lg rounded-bl-lg`}>
          <p className={`text-lg font-bold ${isDarkMode ? 'bg-light text-black' : 'bg-light text-black'}`}>2024</p>
          <p className={`text-sm ${isDarkMode ? 'bg-light text-black' : 'bg-light text-black'}`}>June</p>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-2/3">
          <div>
            <h2 className={`font-bold text-2xl mb-4 ${isDarkMode ? 'bg-light text-green-500' : 'bg-light text-black'}`}>Tic-Tac-Toe</h2>
            <p className={`mb-6 ${isDarkMode ? 'bg-light text-green-500' : 'bg-light text-black'}`}>
              This site presents an interactive tic-tac-toe game with a clean and straightforward design. Users can start a new game and enjoy a simple, engaging user experience.
            </p>
          </div>
          <a href="https://tic-tac-toe-lime-phi.vercel.app/" target='blank' className="text-green-500 font-bold hover:underline">Read More →</a>
        </div>

        {/* Image */}
        <div className="w-1/3">
          <img 
            src="https://res-console.cloudinary.com/dh60kpxg5/thumbnails/v1/image/upload/v1726192813/dGljX3BqcHRocw==/preview" 
            alt="Tic-Tac-Toe" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
