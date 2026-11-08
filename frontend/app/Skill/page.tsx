
'use client';

import React from 'react';
import Image from 'next/image';

export default function SkillSection() {
  return (
    <section id="skill" className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center py-13 px-9 md:px-20 bg-white gap-10 lg:gap-16 overflow-hidden">

      <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left select-none">

        <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-11 w-30 h-20 sm:w-30 sm:h-22 z-10 pointer-events-none">
          <Image src="/Asset/Star 1.png" alt="Star Decoration" width={70} height={70} className="w-full h-full object-contain" />
        </div>

        <div className="absolute -bottom-6 -left-8 sm:-bottom-8 sm:-left-20 w-20 h-20 sm:w-90 sm:h-26 z-10 pointer-events-none">
          <Image src="/Asset/Star 1.png" alt="Star Decoration" width={70} height={70} className="w-full h-full object-contain" />
        </div>

        <div className="relative bg-[#800040] transform -rotate-6 px-6 py-4 sm:px-10 sm:py-4 shadow-md z-10 my-4">
          <h2 className="text-6xl sm:text-5xl lg:text-8xl font-['Imperial_Script'] text-white tracking-wide">
            Software
          </h2>
        </div>

        <span className="text-3xl sm:text-5xl font-bold text-black my-1 ml-45 font-['Bona_Nova'] -rotate-8">
          &
        </span>

        <div className="relative bg-[#6b4226] transform -rotate-6 px-6 py-4 sm:px-10 sm:py-4 shadow-md z-10 my-2 ml-25">
          <h2 className="text-6xl sm:text-5xl lg:text-8xl font-['Imperial_Script'] text-white tracking-wide">
            Skill
          </h2>
        </div>

      </div>

      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl flex justify-center items-center">

        <div className="relative w-full aspect-[9/7] flex items-center justify-center">

          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/Asset/blur.png"
              alt="Blur"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-[850px] h-[850px] z-10 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer">
            <Image
              src="/Asset/amplop.png"
              alt="Software and Skill Envelope"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
