'use client';

import React from 'react';
import Image from 'next/image';

export default function TestimoniSection() {
  return (
    <section
      id="testimoni"
      className="scroll-reveal relative min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 md:px-12 bg-white overflow-hidden"
    >

      <div className="absolute -left-90 top-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[900px] pointer-events-none z-0 opacity-80">
        <Image src="/Asset/blur.png" alt="blur kiri" fill className="object-contain" />
      </div>

      <div className="absolute -right-90 top-1/2 -translate-y-1/2 w-[650px] sm:w-[750px] h-[900px] pointer-events-none z-0 opacity-80">
        <Image src="/Asset/blur.png" alt="blur kanan" fill className="object-contain" />
      </div>

      <div
        className="absolute inset-0 -z-10 bg-radial-gradient pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 105, 180, 0.35) 0%, rgba(255, 223, 128, 0.4) 40%, rgba(255, 255, 255, 0) 70%), radial-gradient(circle at 70% 75%, rgba(255, 223, 128, 0.4) 0%, rgba(255, 105, 180, 0.35) 40%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            {[
              { name: "martin", text: "alma sangat keren bahkan bisa mengubah saya yang dulunya suka supra sekarang suka Billie Eilis BTS" },
              { name: "alma suka ayam", text: "terinspirasi oleh Azzha" },
              { name: "Juki", text: "juki suka samudra leniomer supra ganteng❤️" },
            ].map((item, index) => (
              <div key={index} className="relative w-full bg-white border border-black rounded-[25px] p-3 flex flex-col justify-between shadow-sm min-h-[110px] transition-all duration-300 hover:-translate-y-3 hover:shadow-xl cursor-pointer">
                <div className="absolute -top-5 -left-6 w-15 h-15 z-20 pointer-events-none">
                  <Image src="/Asset/Star 7.png" alt="Star" width={50} height={50} className="w-full h-full object-contain" />
                </div>

                <div className="w-full bg-[#E6F800] border border-black rounded-[18px] py-4 px-3.5 flex flex-col gap-1.5">
                  <h4 className="font-bold text-black text-base sm:text-lg">{item.name}</h4>
                  <p className="text-[11px] sm:text-xs text-black/80 font-sans leading-snug">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-6/12 flex flex-col items-center gap-4 relative">

            <div className="relative flex items-center justify-center select-none text-center">
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter leading-none font-['Overlock_SC']"
                style={{ WebkitTextStroke: '1px black' }}
              >
                TESTIMONI
              </h2>
              <span className="absolute -top-3 -left-5 text-2xl sm:text-4xl font-bold text-amber-500 font-['Overlock_SC']">?</span>
              <span className="absolute -bottom-1 -right-5 text-2xl sm:text-4xl font-bold text-amber-500 font-['Overlock_SC']">?</span>
            </div>

            <div className="absolute -bottom-10 -right-10 w-28 h-28 z-10 pointer-events-none">
              <Image src="/Asset/star 2.png" alt="Star" width={60} height={60} className="w-full h-full object-contain" />
            </div>

            <div className="w-full relative border border-black rounded-[40px] p-6 sm:p-7 md:p-8 bg-white/30 backdrop-blur-[2px] flex flex-col gap-4 z-30 shadow-sm justify-center">

              <h3 className="text-center font-bold text-black text-base sm:text-lg">Masukkan pendapat mu juga!</h3>

              <form className="flex flex-col gap-3.5">
                <input
                  type="text"
                  placeholder="Masukkan Nama anda"
                  className="w-full bg-[#EAEAEA] border border-black/20 rounded-full py-2.5 px-5 text-xs sm:text-sm text-black placeholder:text-black/50 focus:outline-none focus:border-black"
                />

                <textarea
                  placeholder="Masukkan Pesan"
                  rows={4}
                  className="w-full bg-[#EAEAEA] border border-black/20 rounded-[20px] py-2.5 px-5 text-xs sm:text-sm text-black placeholder:text-black/50 focus:outline-none focus:border-black resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#FF2D92] hover:bg-[#e0247f] text-white font-bold py-2.5 rounded-full transition-all shadow-sm text-xs sm:text-sm"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}