"use client";
import { useAppSelector } from '@/app/hooks';

const Projects = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <div className="px-4 sm:px-8 py-16 border-t-2 border-tertiary">
      <h1 className={`font-bold text-2xl sm:text-4xl mb-8 sm:mb-12 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>Selected Works.</h1>
      
      {/* Project 1 */}
      <div className={` ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'} rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-12 flex flex-col sm:flex-row h-auto sm:h-[300px] animate-slide-in-left`} id='projects'>
        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-black'} text-center px-4 py-2 rounded-tl-lg sm:rounded-bl-lg`}>
          <p className="text-lg font-bold">2024</p>
          <p className="text-sm">August</p>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className={`font-bold text-xl sm:text-2xl mb-4 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>E-Commerce</h2>
            <p className={`mb-6 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>
              Developed a modern, React-based e-commerce platform with a sleek, minimalist design. The platform includes dynamic product listings, responsive navigation, and is optimized for fast product browsing.
            </p>
          </div>
          <a href="https://ec-react-one.vercel.app/" target="_blank" className="text-green-500 font-bold hover:underline">View More →</a>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/3 h-60 sm:h-auto">
          <img 
            src="https://res-console.cloudinary.com/dh60kpxg5/thumbnails/v1/image/upload/v1726192994/a2lja3NfcjV4aDhw/preview" 
            alt="E-commerce" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Project 2 */}
      <div className={` ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'} rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-12 flex flex-col sm:flex-row h-auto sm:h-[300px] animate-slide-in-right`}>
        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-black'} text-center px-4 py-2 rounded-tl-lg sm:rounded-bl-lg`}>
          <p className="text-lg font-bold">2024</p>
          <p className="text-sm">June</p>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className={`font-bold text-xl sm:text-2xl mb-4 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>Tic-Tac-Toe</h2>
            <p className={`mb-6 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>
              Built an interactive Tic-Tac-Toe game using React, featuring a clean and straightforward design.
            </p>
          </div>
          <a href="https://tic-tac-toe-lime-phi.vercel.app/" target='_blank' className="text-green-500 font-bold hover:underline">View More →</a>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/3 h-60 sm:h-auto">
          <img 
            src="https://res-console.cloudinary.com/dh60kpxg5/thumbnails/v1/image/upload/v1726192813/dGljX3BqcHRocw==/preview" 
            alt="Tic-Tac-Toe" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Project 3 */}
      <div className={` ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'} rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-12 flex flex-col sm:flex-row h-auto sm:h-[300px] animate-slide-in-left`} id='projects'>
        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-black'} text-center px-4 py-2 rounded-tl-lg sm:rounded-bl-lg`}>
          <p className="text-lg font-bold">2024</p>
          <p className="text-sm">September</p>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className={`font-bold text-xl sm:text-2xl mb-4 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>Movie Browser Application</h2>
            <p className={`mb-6 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>
              Developed a dynamic movie browsing application using React and Vite. Users can search for movies, view details, and watch trailers directly within the app.
            </p>
          </div>
          <a href="https://movies-client-blond.vercel.app/" target="_blank" className="text-green-500 font-bold hover:underline">View More →</a>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/3 h-60 sm:h-auto">
          <img 
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1726590694/movie_pck1ms.png" 
            alt="Movie-App" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
