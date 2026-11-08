
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../Navbar/page';

export default function SertifikatPage() {
  const certificates = [
    { id: 1, title: 'Sertifikat 1', desc: 'Detail lengkap mengenai sertifikat pertama.' },
    { id: 2, title: 'Sertifikat 2', desc: 'Detail lengkap mengenai sertifikat kedua.' },
    { id: 3, title: 'Sertifikat 3', desc: 'Detail lengkap mengenai sertifikat ketiga.' },
    { id: 4, title: 'Sertifikat 4', desc: 'Detail lengkap mengenai sertifikat keempat.' },
    { id: 5, title: 'Sertifikat 5', desc: 'Detail lengkap mengenai sertifikat kelima.' },
    { id: 6, title: 'Sertifikat 6', desc: 'Detail lengkap mengenai sertifikat keenam.' },
  ];

  return (
    <main className="relative min-h-screen w-full bg-white text-black overflow-hidden pt-32">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 0% 5%, rgba(255, 180, 80, 0.65), transparent 28%),
            radial-gradient(circle at 0% 0%, rgba(255, 105, 180, 0.35), transparent 25%),
            radial-gradient(circle at 100% 100%, rgba(255, 105, 180, 0.45), transparent 30%),
            radial-gradient(circle at 100% 100%, rgba(255, 220, 120, 0.3), transparent 40%)
          `,
        }}
      />

      {/* BACKGROUND STAR KANAN ATAS */}
      <div className="absolute -right-32 -top-24 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] z-0 pointer-events-none">
        <Image
          src="/Asset/Star 3.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 400px, 500px"
          className="object-contain"
        />
      </div>

      {/* BACKGROUND STAR KIRI BAWAH */}
      <div className="absolute -left-40 bottom-[-150px] w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] z-0 pointer-events-none">
        <Image
          src="/Asset/Star.png"
          alt=""
          fill
          sizes="(max-width: 640px) 500px, 650px"
          className="object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <section className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-8 pb-20">

        {/* JUDUL SERTIFIKAT */}
        <div className="relative flex items-center justify-center mb-20 mt-5 popup-title">

          {/* STAR KIRI ATAS */}
          <div className="absolute -top-14 -left-12 sm:-left-16 w-20 h-20 sm:w-28 sm:h-28 z-20 pointer-events-none">
            <Image
              src="/Asset/Star.png"
              alt=""
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>

          {/* STAR KANAN BAWAH */}
          <div className="absolute -bottom-12 -right-12 sm:-right-16 w-20 h-20 sm:w-28 sm:h-28 z-20 pointer-events-none">
            <Image
              src="/Asset/Star 10.png"
              alt=""
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>

          {/* KOTAK COKELAT */}
          <div className="relative bg-[#5C3317] px-12 py-5 sm:px-16 sm:py-7 shadow-md">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide text-center font-['Red_Rose']">
              Sertifikat
            </h1>
          </div>

        </div>

        {/* GRID KARTU SERTIFIKAT */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 relative z-10">

          {certificates.map((item, index) => (
            <div
              key={item.id}
              className="
                popup-card
                relative w-full aspect-[4/3]
                bg-[#EBF400]
                border-2 border-black
                rounded-md
                shadow-sm
                p-3
                cursor-pointer
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:scale-[1.02]
              "
              style={{
                animationDelay: `${0.25 + index * 0.15}s`,
              }}
            >

              {/* BORDER DALAM KARTU */}
              <div className="
                w-full h-full
                border-2 border-black/40
                flex flex-col
                items-center justify-center
                text-center
                gap-3
                p-4
              ">

                <span className="text-xs font-mono tracking-[3px] text-black/70">
                  CERTIFICATE
                </span>

                <div className="w-16 h-1 bg-black rounded-full" />

                <h3 className="text-xl sm:text-2xl font-bold text-black font-['Red_Rose']">
                  {item.title}
                </h3>

                <p className="text-xs text-black/70">
                  {item.desc}
                </p>

                <span className="text-[10px] font-mono text-black/60">
                  CLICK TO VIEW
                </span>

              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
