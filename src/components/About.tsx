const About = () => {
  return (
    <div className="mt-32 animate-fade-in border-t-2 border-tertiary px-4 sm:px-16" style={{ animationDelay: '0.5s' }} id="about">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-green-900 text-center sm:text-left">ABOUT ME</h1>
      </div>
      <div className="w-full sm:w-3/4 mx-auto sm:ml-36">
        {/* Frontend Development */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-12 sm:before:-translate-x-28 text-green-900">
            INTERACTIVE FRONTEND DEVELOPMENT
          </h1>
          <p className="text-gray-500 text-base sm:text-xl">
            I'm proficient in frontend technologies like React.js, styled-components, and Tailwind CSS. I focus on creating responsive UIs...
          </p>
        </div>
        {/* Backend Development */}
        <div className="mt-8">
          <h1 className="text-xl sm:text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-12 sm:before:-translate-x-28 text-green-900">
            INTERACTIVE BACKEND DEVELOPMENT
          </h1>
          <p className="text-gray-500 text-base sm:text-xl">
            In backend development, I specialize in Node.js and Express.js, focusing on building robust APIs...
          </p>
        </div>
        {/* MERN Stack */}
        <div className="mt-8">
          <h1 className="text-xl sm:text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-12 sm:before:-translate-x-28 text-green-900">
            ASK ME ABOUT THE MERN STACK
          </h1>
          <p className="text-gray-500 text-base sm:text-xl">
            As a full-stack developer, I excel at integrating React and Express to deliver dynamic, secure web applications...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About