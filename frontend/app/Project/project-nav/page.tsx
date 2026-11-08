
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../Navbar/page';

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
    <main className="relative min-h-screen w-full bg-white text-black overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 5% 35%, rgba(255, 220, 100, 0.55), transparent 22%),
            radial-gradient(circle at 3% 45%, rgba(255, 105, 180, 0.30), transparent 18%),
            radial-gradient(circle at 100% 100%, rgba(255, 105, 180, 0.35), transparent 28%),
            radial-gradient(circle at 100% 100%, rgba(255, 220, 120, 0.3), transparent 38%)
          `,
        }}
      />

      {/* VECTOR KANAN ATAS */}
      <div className="absolute -top-20 -right-20 w-[300px] h-[400px] sm:w-[430px] sm:h-[520px] z-0 pointer-events-none">
        <Image
          src="/Asset/Vector 4.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 100vw, 430px"
          className="object-contain"
        />
      </div>

      {/* VECTOR KIRI BAWAH */}
      <div className="absolute -bottom-32 -left-24 w-[350px] h-[400px] sm:w-[480px] sm:h-[550px] z-0 pointer-events-none">
        <Image
          src="/Asset/Vector 3.png"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 480px"
          className="object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <section className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center px-5 sm:px-8 pt-44 pb-24">

        {/* JUDUL PROJECT */}
        <div className="relative flex items-center justify-center mb-24 popup-title">

          {/* STAR KIRI BAWAH JUDUL */}
          <div className="absolute -left-7 -bottom-5 sm:-left-10 sm:-bottom-7 w-14 h-14 sm:w-20 sm:h-20 z-20 pointer-events-none">
            <Image
              src="/Asset/Star 7.png"
              alt=""
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>

          {/* KOTAK PINK DAN JUDUL */}
          <div className="bg-[#F51D91] px-10 py-2 sm:px-14 sm:py-3 relative">
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-none text-center font-['Red_Rose']"
              style={{
                WebkitTextStroke: '1.5px black',
                paintOrder: 'stroke fill',
              }}
            >
              project
            </h1>
          </div>

        </div>

        {/* GRID PROJECT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl z-10">

          {projectList.map((item, index) => (
            <div
              key={item.id}
              className="
                popup-card
                relative w-full
                bg-white
                border border-black
                rounded-[30px]
                p-3 sm:p-4
                flex flex-col items-center
                gap-2
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-lg
              "
              style={{
                animationDelay: `${0.25 + index * 0.2}s`,
              }}
            >

              {/* BINTANG NOMOR PROJECT */}
              <div className="absolute -top-7 -left-7 sm:-top-9 sm:-left-9 w-16 h-16 sm:w-20 sm:h-20 z-30 flex items-center justify-center pointer-events-none">

                <div className="relative w-full h-full flex items-center justify-center">

                  <Image
                    src="/Asset/Star 7.png"
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain"
                  />

                  <span
                    className="absolute font-black text-white text-base sm:text-lg"
                    style={{ WebkitTextStroke: '0.5px black' }}
                  >
                    {item.id}
                  </span>

                </div>
              </div>

              {/* KOTAK KUNING PROJECT */}
              <div className="
                w-full
                h-28 sm:h-44
                bg-[#E6F800]
                border border-black
                rounded-[20px]
                flex-shrink-0
                relative
                overflow-hidden
              ">

                {/* GAMBAR PROJECT */}
                {/*
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                */}

              </div>

              {/* JUDUL PROJECT */}
              <div className="w-full text-center py-1">
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight font-['Red_Rose']">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}
