'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '';

export default function SertifikatPage() {
  // Data daftar sertifikat (6 buah sesuai desain)
  const certificates = [
    { id: 1, title: 'Sertifikat 1' },
    { id: 2, title: 'Sertifikat 2' },
    { id: 3, title: 'Sertifikat 3' },
    { id: 4, title: 'Sertifikat 4' },
    { id: 5, title: 'Sertifikat 5' },
    { id: 6, title: 'Sertifikat 6' },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-black relative flex flex-col items-center overflow-x-hidden">
      
      {/* Navbar Global (Sticky) */}
      <Navbar />

      {/* Main Section */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-16 px-4 sm:px-8 my-auto">
        
        {/* Soft Background Radial Gradient */}
        <div 
          className="absolute inset-0 -z-10 bg-radial-gradient pointer-events-none opacity-50"
          style={{
            background: 'radial-gradient(circle at 10% 40%, rgba(255, 223, 128, 0.5) 0%, rgba(255, 105, 180, 0.3) 40%, rgba(255, 255, 255, 0) 70%), radial-gradient(circle at 85% 75%, rgba(255, 105, 180, 0.45) 0%, rgba(255, 223, 128, 0.3) 35%, rgba(255, 255, 255, 0) 70%)'
          }}
        />

        {/* 1. JUDUL SERTIFIKAT (Kotak Cokelat + Bintang Hiasan) */}
        <div className="relative mb-14 flex items-center justify-center select-none">
          {/* Bintang Hiasan Kiri */}
          <div className="absolute -top-6 -left-8 sm:-left-12 w-12 h-12 sm:w-16 sm:h-16 z-20 pointer-events-none">
            <Image 
              src="/Asset/Star 1.png" 
              alt="Star Decoration" 
              width={70} 
              height={70} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bintang Hiasan Kanan Bawah Judul */}
          <div className="absolute -bottom-4 -right-8 sm:-right-12 w-10 h-10 sm:w-14 sm:h-14 z-20 pointer-events-none">
            <Image 
              src="/Asset/Star 1.png" 
              alt="Star Decoration" 
              width={70} 
              height={70} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Kotak Judul Cokelat */}
          <div className="bg-[#6b4226] px-12 py-4 sm:px-20 sm:py-5 rounded-md shadow-md transform -rotate-1 z-10">
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-wide text-center">
              Sertifikat
            </h2>
          </div>
        </div>

        {/* 2. GRID KARTU SERTIFIKAT (3 Kolom x 2 Baris) */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {certificates.map((item) => (
            <div 
              key={item.id}
              className="relative w-full aspect-[4/3] bg-[#EBF400] border-2 border-black/80 rounded-[25px] shadow-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-300 overflow-hidden p-4"
            >
              {/* Tempat Gambar Sertifikat Nanti */}
              {/* <Image src={item.image} alt={item.title} fill className="object-cover rounded-[23px]" /> */}
              
              <span className="text-black/60 font-mono text-sm font-bold">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}