

const About = () => {

  
    return (
      <div className="mt-32 animate-fade-in border-t-2 border-tertiary" style={{ animationDelay: '0.5s' }} id="about">
        <div>
          <h1 className="ml-36 text-4xl font-bold mb-4 text-green-900">
            ABOUT ME
          </h1>
        </div>
        <div className="w-3/4 ml-36">       
          <div> 
            <h1 className="text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-28 text-green-900">INTERACTIVE FRONTEND DEVELOPMENT</h1>
            <p className="text-gray-500 text-xl">I'm proficient in frontend technologies like React.js, styled-components, and Tailwind CSS. I focus on creating responsive UIs, leveraging animations and transitions for smooth user experiences. My projects are structured with reusable components, ensuring clean, scalable code.</p>
          </div>   
          <div className="mt-8">
            <h1 className="text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-28 text-green-900">INTERACTIVE BACKEND DEVELOPMENT</h1>
            <p className="text-gray-500 text-xl">In backend development, I specialize in Node.js and Express.js, focusing on building robust APIs. With strong expertise in MongoDB, I ensure efficient and scalable database management. My backend work includes seamless data flow and secure authentication systems.</p>
          </div> 
          <div className="mt-8">
            <h1 className="text-2xl font-semibold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-20 before:h-[2px] before:bg-tertiary before:-translate-x-28 text-green-900">ASK ME ABOUT THE MERN STACK</h1>
            <p className="text-gray-500 text-xl">As a full-stack developer, I excel at integrating React and Express to deliver dynamic, secure web applications. I handle both client-side and server-side development, ensuring solutions are user-friendly and technically sound.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  