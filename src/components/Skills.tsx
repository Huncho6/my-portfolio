import { FaCss3, FaGitAlt, FaHtml5, FaNode, FaReact } from 'react-icons/fa'; 
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div className='mt w-full flex flex-col items-center border-t-2 border-tertiary' id='skills'>
      {/* Skills Heading */}
      <h1 className="text-5xl font-extrabold tracking-widest mb-6 text-gray-700">
        SKILLS
      </h1>

      {/* Skills Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8'>
        
        {/* HTML5 */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <FaHtml5 className='w-24 h-24 text-orange-500' />
          <span className="text-lg font-semibold text-gray-700 mt-4">HTML5</span>
        </div>
        
        {/* CSS */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <FaCss3 className='w-24 h-24 text-blue-500' />
          <span className="text-lg font-semibold text-gray-700 mt-4">CSS</span>
        </div>
        
        {/* GitHub */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <FaGitAlt className='w-24 h-24 text-red-500' />
          <span className="text-lg font-semibold text-gray-700 mt-4">GitHub</span>
        </div>
        
        {/* React */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <FaReact className='w-24 h-24 text-blue-500' />
          <span className="text-lg font-semibold text-gray-700 mt-4">React</span>
        </div>
        
        {/* Tailwind */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <SiTailwindcss className='w-24 h-24 text-blue-500' />
          <span className="text-lg font-semibold text-gray-700 mt-4">Tailwind</span>
        </div>
        
        {/* Express.js */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <SiExpress className='w-24 h-24 text-blue-500' />
          <span className="text-lg font-semibold text-gray-700 mt-4">Express.js</span>
        </div>
        
        {/* Next.js */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <RiNextjsFill className='w-24 h-24 text-gray-900' />
          <span className="text-lg font-semibold text-gray-700 mt-4">Next.js</span>
        </div>
        
        {/* Node.js */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <FaNode className='w-24 h-24 text-green-600' />
          <span className="text-lg font-semibold text-gray-700 mt-4">Node.js</span>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center justify-center h-48 w-48 transform transition duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl shadow-lg rounded-lg p-5 animate-fade-in-scale">
          <SiMongodb className='w-24 h-24 text-green-800' />
          <span className="text-lg font-semibold text-gray-700 mt-4">MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;