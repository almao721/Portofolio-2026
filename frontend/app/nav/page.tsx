import React from "react";

export default function Page() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#0d21a7] z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-8">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        <ul className="flex items-center gap-10 text-white font-medium">
          <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
          <li><a href="#skills" className="hover:text-gray-300 transition">Skills</a></li>
          <li><a href="#portfolio" className="hover:text-gray-300 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}