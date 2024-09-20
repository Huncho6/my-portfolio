"use client";
import { useState, useEffect } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useAppSelector } from "./hooks";


export default function Main() {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a page loading delay (use actual conditions in a real-world app)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // Adjust the time as per your actual loading duration

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        // Show the spinner while loading is true
        <div className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-black text-green-900' : 'bg-white text-green-900'}`}>
          <div className="animate-bounce text-9xl font-bold text-green-600">
            IB
          </div>
        </div>
      ) : (
        // Show the actual content once loading is false
        <div className="flex-1 overflow-auto">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}
