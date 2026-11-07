'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function ProjectPage() {
  const projectList = [
    {
      id: 1,
      title: 'Temu!n',
      image: '/Asset/project-temuin.png',
    },
    {
      id: 2,
      title: 'Martin Edawards',
      image: '/Asset/project-martin.png',
    },
    {
      id: 3,
      title: 'Wandersea',
      image: '/Asset/project-wandersea.png',
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-black relative flex flex-col items-center">
      
      {/* Navbar Global (Sticky) */}
      <Navbar />

      {/* Main Content Section */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-12 px-4 sm:px-8 my-auto">
        
        {/* Soft Background Radial Gradient */}
        <div 
          className="absolute inset-0 -z-10 bg-radial-gradient pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(255, 223, 128, 0.4) 0%, rgba(255, 105, 180, 0.3) 40%, rgba(255, 255, 255, 0) 70%), radial-gradient(circle at 80% 70%, rgba(255, 105, 180, 0.35) 0%, rgba(255, 223, 128, 0.4) 35%, rgba(255, 255, 255, 0) 70%)'
          }}
        />

        {/* 1. JUDUL PROJECT */}
        <div className="relative mb-16 flex items-center justify-center select-none">
          <div className="absolute -left-8 sm:-left-12 -bottom-2 sm:-bottom-4 w-10 h-10 sm:w-14 sm:h-14 z-10 pointer-events-none">
            <Image 
              src="/Asset/Star 1.png" 
              alt="Star Decoration" 
              width={60} 
              height={60} 
              className="w-full h-full object-contain"
            />
          </div>

          <h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-widest text-transparent uppercase"
            style={{
              WebkitTextStroke: '2px black',
            }}
          >
            PROJECT
          </h1>
        </div>

        {/* 2. GRID KARTU PROJECT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl z-10">
          {projectList.map((item) => (
            <div 
              key={item.id}
              className="relative w-full bg-white border-2 border-black rounded-[25px] p-4 flex flex-col items-center shadow-sm hover:scale-105 transition-transform duration-300"
            >
              {/* Bintang Hiasan + Nomor */}
              <div className="absolute -top-5 -left-5 w-12 h-12 sm:w-14 sm:h-14 z-20 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src="/Asset/Star 1.png" 
                    alt={`Star Number ${item.id}`} 
                    width={60} 
                    height={60} 
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute font-black text-black text-xs sm:text-sm">
                    {item.id}
                  </span>
                </div>
              </div>

              {/* Box Kuning Gambar Project (Dibuat Kotak / Aspect Ratio 4:3 Supaya Proporsional) */}
              <div className="w-full aspect-[4/3] bg-[#EBF400] border border-black/20 rounded-[18px] flex items-center justify-center overflow-hidden relative">
                {/* <Image src={item.image} alt={item.title} fill className="object-cover" /> */}
              </div>

              {/* Judul Project */}
              <h3 className="text-base sm:text-lg font-bold text-black mt-4 mb-1 text-center font-sans">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}