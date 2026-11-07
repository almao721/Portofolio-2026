'use client';

import React from 'react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="kontak" className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 md:px-12 bg-white overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-radial-gradient pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(255, 223, 128, 0.5) 0%, rgba(255, 105, 180, 0.4) 40%, rgba(255, 255, 255, 0) 70%), radial-gradient(circle at 50% 70%, rgba(255, 105, 180, 0.45) 0%, rgba(255, 223, 128, 0.4) 35%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="relative w-full lg:w-7/12 border-2 border-black/80 rounded-[40px] p-6 sm:p-8 bg-white shadow-sm">
          <div className="absolute -top-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 z-20 pointer-events-none">
            <Image src="/Asset/Star 1.png" alt="Star Decoration" width={70} height={70} className="w-full h-full object-contain" />
          </div>
          <div className="absolute -bottom-6 right-8 w-12 h-12 sm:w-16 sm:h-16 z-20 pointer-events-none">
            <Image src="/Asset/Star 1.png" alt="Star Decoration" width={70} height={70} className="w-full h-full object-contain" />
          </div>

          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="w-full border border-black/30 rounded-full px-5 py-3.5 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="w-full border border-black/30 rounded-full px-5 py-3.5 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono" />
              <input type="tel" placeholder="Phone" className="w-full border border-black/30 rounded-full px-5 py-3.5 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono" />
            </div>
            <textarea rows={5} placeholder="Message" className="w-full border border-black/30 rounded-[30px] px-5 py-4 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono resize-none" />
            <button type="submit" className="w-full py-3.5 bg-[#E88D4D] hover:bg-[#d67b3b] text-white font-bold rounded-full transition shadow-md mt-2 tracking-wide">
              Send Message
            </button>
          </form>
        </div>

        <div className="relative w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left select-none">
          <div className="absolute -top-4 right-6 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 z-10 pointer-events-none">
            <Image src="/Asset/Star 1.png" alt="Star Decoration" width={70} height={70} className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-2 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 z-10 pointer-events-none">
            <Image src="/Asset/Star 1.png" alt="Star Decoration" width={70} height={70} className="w-full h-full object-contain" />
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-none">LET'S GET</h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-none mt-2">IN TOUCH</h1>
        </div>
      </div>
    </section>
  );
}