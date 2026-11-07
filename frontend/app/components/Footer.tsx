import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#4A0023] text-white pt-16 pb-8 px-6 md:px-16 overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">
        
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
            AL MAGHFIRA TIARA HISBAINI
          </h2>
          <p className="text-sm text-pink-200/80 font-medium">
            Fullstack Developer
          </p>
          <p className="text-xs text-pink-100/70 leading-relaxed max-w-sm mt-1">
            Turning ideas into modern experiences with passion and precision. Let's create something extraordinary together.
          </p>
          
          <div className="flex items-center gap-4 mt-3 text-lg text-white">
            <a href="#" className="hover:text-pink-300 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-pink-100/80">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#skill" className="hover:text-white transition">Skill</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#sertifikat" className="hover:text-white transition">Certificates</a>
            <a href="#project" className="hover:text-white transition">Project</a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-3 text-sm text-pink-100/80">
            <a href="mailto:qlmaaoo@gmail.com" className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope className="text-base" />
              <span>qlmaaoo@gmail.com</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneAlt className="text-base" />
              <span>whatsapp</span>
            </a>
          </div>
        </div>

      </div>

      <div className="w-full max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-pink-200/60 gap-4">
        <p>© 2026 Alma. All rights reserved.</p>
        <p>Made with <span className="ml-1 text-pink-100/90 font-medium">using next.js</span></p>
      </div>

    </footer>
  );
};

export default Footer;