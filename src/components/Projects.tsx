"use client";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/app/hooks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  // Create refs for each project
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useEffect(() => {
    // Ensure the elements are visible before animation
    const projects = [
      { element: project1Ref.current, direction: "left" },
      { element: project2Ref.current, direction: "right" },
      { element: project3Ref.current, direction: "left" }
    ];

    // Set initial visibility to prevent them from being invisible on load
    projects.forEach((project) => {
      gsap.set(project.element, { opacity: 1 }); // Ensure it's visible by default
    });

    // Define the slide-in animations for each project
    projects.forEach((project, index) => {
      gsap.fromTo(
        project.element,
        { // Initial state
          x: project.direction === "left" ? -200 : 200, // Start position off-screen
          opacity: 0 // Hidden initially
        },
        { // End state
          x: 0, // End position in the view
          opacity: 1, // Fully visible
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: project.element,
            start: "top 80%", // Trigger when the element is in view
            toggleActions: "play none none none", // Play animation when in view
          },
          delay: index * 0.2, // Stagger animations slightly
        }
      );
    });
  }, []);

  return (
    <div className="px-4 sm:px-8 py-12 sm:py-16 border-t-2 border-tertiary" id="projects">
      <h1 className={`font-bold text-2xl sm:text-4xl mb-6 sm:mb-12 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>Selected Works.</h1>

      {/* Project 1 */}
      <div
        ref={project1Ref}
        className={`flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-12 ${isDarkMode ? 'bg-dark' : 'bg-light'} h-auto sm:h-[350px] transition-all transform hover:scale-105`}
      >
        {/* Image */}
        <div className="w-full sm:w-1/3 h-64 sm:h-full">
          <img 
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1726848934/kickaaa_dehiat.png" 
            alt="E-commerce" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className={`font-bold text-xl sm:text-2xl mb-4 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>E-Commerce</h2>
            <p className={`mb-4 text-base ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`}>
              Developed a modern, React-based e-commerce platform with a sleek, minimalist design. The platform includes dynamic product listings and responsive navigation.
            </p>
          </div>
          <Link href="https://ec-react-one.vercel.app/" target="_blank" className="text-green-500 font-bold hover:underline">View More →</Link>
        </div>

        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-white'} absolute top-0 right-0 px-4 py-2 rounded-bl-lg shadow-md`}>
          <p className="text-lg font-bold">2024</p>
          <p className="text-sm">August</p>
        </div>
      </div>

      {/* Project 2 */}
      <div
        ref={project2Ref}
        className={`flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-12 ${isDarkMode ? 'bg-dark' : 'bg-light'} h-auto sm:h-[350px] transition-all transform hover:scale-105`}
      >
        {/* Image */}
        <div className="w-full sm:w-1/3 h-64 sm:h-full">
          <img 
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1726848934/tictac_ub60t6.png" 
            alt="Tic-Tac-Toe" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className={`font-bold text-xl sm:text-2xl mb-4 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>Tic-Tac-Toe</h2>
            <p className={`mb-4 text-base ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`}>
              Built an interactive Tic-Tac-Toe game using React, featuring a clean and straightforward design.
            </p>
          </div>
          <Link href="https://tic-tac-toe-lime-phi.vercel.app/" target='_blank' className="text-green-500 font-bold hover:underline">View More →</Link>
        </div>

        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-white'} absolute top-0 right-0 px-4 py-2 rounded-bl-lg shadow-md`}>
          <p className="text-lg font-bold">2024</p>
          <p className="text-sm">June</p>
        </div>
      </div>

      {/* Project 3 */}
      <div
        ref={project3Ref}
        className={`flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-lg mb-8 sm:mb-12 ${isDarkMode ? 'bg-dark' : 'bg-light'} h-auto sm:h-[350px] transition-all transform hover:scale-105`}
      >
        {/* Image */}
        <div className="w-full sm:w-1/3 h-64 sm:h-full">
          <img 
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1726590694/movie_pck1ms.png" 
            alt="Movie-App" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between w-full sm:w-2/3">
          <div>
            <h2 className={`font-bold text-xl sm:text-2xl mb-4 ${isDarkMode ? 'text-green-500' : 'text-black'}`}>Movie Browser Application</h2>
            <p className={`mb-4 text-base ${isDarkMode ? 'text-green-400' : 'text-gray-700'}`}>
              Developed a dynamic movie browsing application using React and Vite. Users can search for movies, view details, and watch trailers.
            </p>
          </div>
          <Link href="https://movies-client-blond.vercel.app/" target="_blank" className="text-green-500 font-bold hover:underline">View More →</Link>
        </div>

        {/* Date Badge */}
        <div className={`${isDarkMode ? 'bg-green-950 text-green-500' : 'bg-red-500 text-white'} absolute top-0 right-0 px-4 py-2 rounded-bl-lg shadow-md`}>
          <p className="text-lg font-bold">2024</p>
          <p className="text-sm">September</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
