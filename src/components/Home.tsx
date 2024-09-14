"use client";
import { useAppSelector } from '@/app/hooks';

const Home = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode); 

  return (
    <div className={`mt-24 ml-20 relative ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'}`} id='Home'>
      <div className='animate-fade-in-scale' style={{ animationDelay: '0.5s' }}>
        <h1 className='text-3xl font-bold mb-4'>HELLO, I'M IBRAHIM</h1>
        <h1 className={`text-4xl font-bold mb-10 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
           FULLSTACK DEVELOPER
        </h1>
        <div className='animate-fade-in-scale' style={{ animationDelay: '0.5s' }}>
          <button
            className='bg-tertiary hover:bg-purple-600 w-48 h-[50px] rounded-full mb-12'
          >
            Download Resume
          </button>
        </div>
        <p className={`text-xl mb-10 max-w-3xl ${isDarkMode ? 'text-gray-500' : 'text-secondary'}`}>
          I'm a passionate full-stack developer focused on building dynamic web applications. 
          With experience in both frontend and backend development, I create efficient, scalable solutions. 
          My work is driven by a love for problem-solving and delivering seamless user experiences.
        </p>
      </div>
    </div>
  );
}

export default Home;
