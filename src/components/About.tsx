"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Controls for triggering animations
  const [ref, inView] = useInView({ threshold: 0.1 }); // Trigger animation when 10% of the component is visible

  // Animation variants for smooth entrance
  const fadeInVariants = {
  hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5.5 } },
  };

  return (
    <motion.div
    className="mt-16 sm:mt-32 border-t-2 border-tertiary px-4 sm:px-16" 
    id="about"
    ref={ref} // Hook the intersection observer here
    initial="hidden" // Initial state is hidden
    animate={inView ? 'visible' : 'hidden'} // Animate to visible when inView is true
    variants={fadeInVariants} // 
    >
      <div>
        <h1 className="text-xl sm:text-4xl font-bold mb-6 text-green-900 text-center sm:text-left">
          ABOUT ME
        </h1>
      </div>

      {/* Timeline for small screens */}
      <div className="sm:hidden">
        {/* Frontend Development */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 pl-4 mb-10">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-white rounded-full -left-3 ring-8 ring-gray-600 dark:ring-gray-700">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-tertiary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="text-lg font-semibold mb-1 text-green-900">
            FRONTEND DEVELOPMENT
          </h3>
          <p className="text-gray-500 text-base space-y-2">
            I&apos;m proficient in frontend technologies like React.js,
            styled-components, and Tailwind CSS. I focus on creating responsive
            UIs, leveraging animations and transitions for smooth user
            experiences. My projects are structured with reusable components,
            ensuring clean, scalable code.
          </p>
        </div>

        {/* Backend Development */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 pl-4 mb-10">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-white rounded-full -left-3 ring-8 ring-gray-600 dark:ring-gray-700">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-tertiary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="text-lg font-semibold mb-1 text-green-900">
            BACKEND DEVELOPMENT
          </h3>
          <p className="text-gray-500 text-base space-y-2">
            In backend development, I specialize in Node.js and Express.js,
            focusing on building robust APIs. With strong expertise in MongoDB,
            I ensure efficient and scalable database management. My backend work
            includes seamless data flow and secure authentication systems.
          </p>
        </div>

        {/* MERN Stack */}
        <div className="relative border-l border-gray-200 dark:border-gray-700 pl-4 mb-10">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-white rounded-full -left-3 ring-8 ring-gray-600 dark:ring-gray-700">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-tertiary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="text-lg font-semibold mb-1 text-green-900">
            MERN STACK SPECIALIZATION
          </h3>
          <p className="text-gray-500 text-base space-y-2">
            As a full-stack developer, I excel at integrating React and Express
            to deliver dynamic, secure web applications. I handle both
            client-side and server-side development, ensuring solutions are
            user-friendly and technically sound.
          </p>
        </div>
      </div>

      {/* Original design for larger screens */}
      <div className="hidden sm:block w-full sm:w-3/4 mx-auto sm:ml-36">
        {/* Frontend Development */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-12 sm:before:-translate-x-28 text-green-900">
            INTERACTIVE FRONTEND DEVELOPMENT
          </h1>
          <p className="text-gray-500 text-base sm:text-xl mt-4">
            I&apos;m proficient in frontend technologies like React.js,
            styled-components, and Tailwind CSS. I focus on creating responsive
            UIs, leveraging animations and transitions for smooth user
            experiences. My projects are structured with reusable components,
            ensuring clean, scalable code.
          </p>
        </div>

        {/* Backend Development */}
        <div className="mt-8">
          <h1 className="text-xl sm:text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-12 sm:before:-translate-x-28 text-green-900">
            INTERACTIVE BACKEND DEVELOPMENT
          </h1>
          <p className="text-gray-500 text-base sm:text-xl mt-4">
            In backend development, I specialize in Node.js and Express.js,
            focusing on building robust APIs. With strong expertise in MongoDB,
            I ensure efficient and scalable database management. My backend work
            includes seamless data flow and secure authentication systems.
          </p>
        </div>

        {/* MERN Stack */}
        <div className="mt-8 mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-12 sm:before:-translate-x-28 text-green-900">
            ASK ME ABOUT THE MERN STACK
          </h1>
          <p className="text-gray-500 text-base sm:text-xl mt-4">
            As a full-stack developer, I excel at integrating React and Express
            to deliver dynamic, secure web applications. I handle both
            client-side and server-side development, ensuring solutions are
            user-friendly and technically sound.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
