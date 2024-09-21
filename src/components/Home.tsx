"use client";
import { useAppSelector } from '@/app/hooks';
import Link from 'next/link';

const Home = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode); 

  return (
    <div
      className={`mt-24 ml-5 sm:ml-10 lg:ml-20 relative ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}
      id="Home"
    >
      <div className="animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
        {/* Responsive Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          HELLO, I&apos;M IBRAHIM
        </h1>

        {/* Responsive Subheading */}
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
         A FULLSTACK DEVELOPER
        </h1>

        {/* Responsive Button */}
        <div className="animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
          <button className="bg-tertiary hover:bg-purple-600 w-full sm:w-48 h-[50px] rounded-full mb-12">
            <Link href="https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing">Download Resume</Link>
          </button>
        </div>

        {/* Responsive Paragraph */}
        <p className={`text-base sm:text-lg lg:text-xl mb-10 max-w-full sm:max-w-2xl lg:max-w-3xl ${isDarkMode ? 'text-gray-500' : 'text-secondary'}`}>
        I&apos;m a passionate and eager-to-learn full-stack developer focused on building dynamic web applications. With a foundational understanding of both frontend and backend development, I aim to create efficient, scalable solutions. As a fast learner, I&apos;m excited to grow my skills and gain hands-on experience through internships or entry-level opportunities. My love for problem-solving and delivering seamless user experiences drives my work, and I look forward to learning and contributing throughout the process. 
        </p>
      </div>
    </div>
  );
};

export default Home;
