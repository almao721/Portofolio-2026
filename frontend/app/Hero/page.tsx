'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaLinkedinIn, 
  FaEnvelope, 
  FaGithub, 
  FaInstagram, 
  FaFileAlt 
} from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-between py-6 px-4">
      <div 
        className="absolute inset-0 -z-10 bg-radial-gradient pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(255, 105, 180, 0.45) 0%, rgba(255, 223, 128, 0.45) 35%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative w-full max-w-7xl flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-2 mt-4">
        <h1 className="font-['Red_Rose'] text-5xl sm:text-4xl md:text-5xl lg:text-8xl font-black text-black tracking-tighter whitespace-nowrap text-right">
          BONJOUR,
        </h1>

        <div className="relative w-[980px] sm:w-[900px] md:w-[300px] lg:w-[360px] h-[260px] sm:h-[360px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
          <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 w-[150px] sm:w-[520px] h-[150px] sm:h-[320px] z-0 pointer-events-none rotate-180">
            <Image 
              src="/Asset/blur.png" 
              alt="blur atas" 
              fill
              className="object-contain opacity-80"
            />
          </div>
          <div className="absolute bottom-[-500px] left-1/2 -translate-x-1/2 w-[250px] sm:w-[520px] h-[550px] sm:h-[980px] z-0 pointer-events-none">
            <Image 
              src="/Asset/blur.png" 
              alt="blur bawah" 
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[980px] h-[920px] z-20">
            <Image 
              src="/Asset/hero pic.png" 
              alt="Alma Hero Picture" 
              fill
              priority
              className="object-contain mt-30"
            />
          </div>
        </div>

        <Link 
          href="/about"
          className="absolute bottom-0 right-[36%] rotate-6 z-30 bg-[#F5B48B] hover:bg-[#e49f75] text-black font-mono text-[10px] sm:text-xs md:text-sm px-2.5 sm:px-4 py-1 sm:py-2 rounded-full border border-black/20 shadow-md transition-transform hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-1"
        >
          &larr; all about me
        </Link>

        <h1 className="font-['Red_Rose'] text-5xl sm:text-4xl md:text-5xl lg:text-8xl font-black text-black tracking-tighter whitespace-nowrap text-left">
          I’M ALMA
        </h1>
      </div>

      <div className="flex flex-col items-center gap-2 z-20 mb-20">
        <p className="font-mono text-xs sm:text-sm md:text-base text-black text-center tracking-wide">
          Student of <span className="font-bold">SMK TELKOM MAKASSAR</span> from <span className="font-bold">XII FRONTEND</span> class
        </p>

        <div className="flex items-center gap-3 md:gap-4">
          <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-pink-400 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
            <FaLinkedinIn size={15} />
          </a>
          <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-pink-400 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
            <FaEnvelope size={15} />
          </a>
          <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-pink-400 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
            <FaGithub size={15} />
          </a>
          <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-pink-400 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
            <FaInstagram size={15} />
          </a>
          <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-pink-400 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
            <FaFileAlt size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}