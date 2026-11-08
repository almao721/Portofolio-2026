'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: 'Temu!n',
      badge: 'team work',
      description: 'Temuin berisi website pelaporan barang hilang di lingkungan sekolah (Contoh: Smk telkom makassar) yang memudahkan siswa dan warga sekolah untuk melaporkan, menelusuri, dan menemukan barang hilang melalui kategori barang, unggah foto, dan sistem laporan yang terorganisir.',
    },
    {
      id: 2,
      title: 'About Martin',
      badge: 'personally',
      description: 'Website martin edwards adalah berisi tentang martin edwars sebagai pemimpin grub cortis dan beberapa info lainnya tentang martin edwards.',
    },
  ];

  return (
    <section
      id="project"
      className="scroll-reveal relative min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 md:px-8 bg-white overflow-hidden"
    >

      <div className="absolute -top-40 right-1/4 w-[450px] h-[600px] pointer-events-none z-0">
        <Image src="/Asset/blur.png" alt="blur" fill className="object-contain opacity-70" />
      </div>

      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] pointer-events-none z-0">
        <Image src="/Asset/blur.png" alt="blur" fill className="object-contain opacity-60" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 z-10">

        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left select-none">

          <div className="absolute -top-6 -left-8 sm:-top-8 sm:-left-15 w-16 h-18 sm:w-30 sm:h-30 z-20 pointer-events-none">
            <Image src="/Asset/Star 1.png" alt="Star Decoration" width={80} height={80} className="w-full h-full object-contain" />
          </div>

          <div className="absolute -bottom-10 right-2 sm:-right-12 w-22 h-22 sm:w-30 sm:h-30 z-10 pointer-events-none">
            <Image src="/Asset/Star 1.png" alt="Star Decoration" width={90} height={90} className="w-full h-full object-contain" />
          </div>

          <h1 className="text-6xl sm:text-5xl lg:text-8xl font-black text-white leading-none font-['Overlock_SC'] z-20" style={{ WebkitTextStroke: '0.3px black' }}>
            LAST
          </h1>

          <h1 className="text-6xl sm:text-5xl lg:text-8xl font-black text-white leading-none mt-1 sm:mt-2 font-['Overlock_SC'] z-20" style={{ WebkitTextStroke: '0.3px black' }}>
            PROJECT
          </h1>

        </div>

        <div className="w-full max-w-md flex flex-col gap-6 items-center">

          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-full bg-white border border-black rounded-[30px] p-3 sm:p-4 flex flex-col gap-2 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >

              <div className="absolute -top-7 -left-7 sm:-top-9 sm:-left-9 w-16 h-16 sm:w-20 sm:h-20 z-30 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image src="/Asset/Star 7.png" alt={`Number ${project.id}`} width={100} height={100} className="w-full h-full object-contain" />
                  <span className="absolute font-black text-white text-base sm:text-lg" style={{ WebkitTextStroke: '0.5px black' }}>
                    {project.id}
                  </span>
                </div>
              </div>

              <div className="w-full h-28 sm:h-44 bg-[#E6F800] border border-black rounded-[20px] flex-shrink-0 relative overflow-hidden">
              </div>

              <div className="w-full text-center py-1">
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}

          <div className="w-full flex justify-center mt-2">
            <Link
              href="/project"
              className="w-full max-w-[200px] py-2.5 px-6 bg-white hover:bg-black/5 border border-black rounded-full text-black font-mono text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              &larr; selengkapnya
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}