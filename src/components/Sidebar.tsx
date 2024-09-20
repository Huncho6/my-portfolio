// components/Sidebar.tsx
"use client";
import { useAppSelector } from "@/app/hooks";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaHome, FaCode, FaBriefcase, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const Sidebar = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility on small screens
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["FullStack Dev", "ExpressJs", "ReactJs"];

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(textInterval);
  }, [texts.length]);

  return (
    <div className="relative h-screen">
      {/* Hamburger Icon for small screens */}
      <div className="fixed top-4 left-4 md:hidden" style={{ zIndex: 1000 }}>
        <button onClick={toggleSidebar} className="text-3xl absolute z-20 top-0">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 p-4 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${isDarkMode ? "bg-secondary text-gray-100" : "bg-white text-black"} 
        md:static md:flex md:flex-col md:w-64 overflow-auto`}
      >
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1726102296/ibrahim_fjvuq7.jpg"
            alt="profile"
            className="rounded-lg w-26 h-26"
          />
        </div>

        {/* Name and Animated Text */}
        <div className="mt-4">
          <h1
            className={`text-2xl font-bold flex justify-center ${isDarkMode ? "text-gray-200" : "text-black"}`}
          >
            Abodunrin Ibrahim
          </h1>
          <p className={`flex justify-center ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
            {texts[textIndex]}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <Link
            href="https://www.instagram.com/tuneshii/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-green-500 text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ibrahim-abodunrin-8b93872b0/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-green-500 text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Huncho6"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-green-500 text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://x.com/ibroabodunrin"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-green-500 text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            <FaXTwitter />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col w-full mt-8">
          <Link href="#home" onClick={toggleSidebar}>
            <p
              className={`py-2 flex flex-row gap-2 border-t ${
                isDarkMode ? "border-gray-700 text-gray-500 hover:text-green-400" : "border-gray-300 hover:text-green-500"
              }`}
            >
              <FaHome className="text-2xl" /> Home
            </p>
          </Link>
          <Link href="#about" onClick={toggleSidebar}>
            <p
              className={`py-2 flex flex-row gap-2 border-t ${
                isDarkMode ? "border-gray-700 text-gray-500 hover:text-green-400" : "border-gray-300 hover:text-green-500"
              }`}
            >
              <IoPersonOutline className="text-2xl" /> About
            </p>
          </Link>
          <Link href="#projects" onClick={toggleSidebar}>
            <p
              className={`py-2 flex flex-row gap-2 border-t ${
                isDarkMode ? "border-gray-700 text-gray-500 hover:text-green-400" : "border-gray-300 hover:text-green-500"
              }`}
            >
              <FaBriefcase className="text-2xl" /> Works
            </p>
          </Link>
          <Link href="#skills" onClick={toggleSidebar}>
            <p
              className={`py-2 flex flex-row gap-2 border-t ${
                isDarkMode ? "border-gray-700 text-gray-500 hover:text-green-400" : "border-gray-300 hover:text-green-500"
              }`}
            >
              <FaCode className="text-2xl" /> Skills
            </p>
          </Link>
          <Link href="#contact" onClick={toggleSidebar}>
            <p
              className={`py-2 flex flex-row gap-2 border-t border-b ${
                isDarkMode ? "border-gray-700 text-gray-500 hover:text-green-400" : "border-gray-300 hover:text-green-500"
              }`}
            >
              <MdAlternateEmail className="text-2xl" /> Contact Me
            </p>
          </Link>
        </nav>

        {/* Download CV Button */}
        <div className="mt-8">
          <Link
            href="https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing"
            download
            className={`py-2 px-4 rounded-lg text-center block ${
              isDarkMode
                ? "bg-green-950 text-white hover:bg-green-500"
                : "bg-green-600 text-white hover:bg-green-400"
            }`}
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
