"use client";
import { useState, useEffect } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-bounce text-9xl font-bold text-green-600">
            IB
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto">
          <div className="space-y-16">
            {/* Responsive Home Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Home />
            </section>

            {/* Responsive About Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <About />
            </section>

            {/* Responsive Skills Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Skills />
            </section>

            {/* Responsive Projects Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Projects />
            </section>

            {/* Responsive Contact Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Contact />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
