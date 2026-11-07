
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SertifikatSection({ onOpenModal }) {
  const certificates = [
    { id: 1, title: 'Sertifikat 1', desc: 'Detail lengkap mengenai sertifikat pertama.' },
    { id: 2, title: 'Sertifikat 2', desc: 'Detail lengkap mengenai sertifikat kedua.' },
    { id: 3, title: 'Sertifikat 3', desc: 'Detail lengkap mengenai sertifikat ketiga.' },
    { id: 4, title: 'Sertifikat 4', desc: 'Detail lengkap mengenai sertifikat keempat.' },
    { id: 5, title: 'Sertifikat 5', desc: 'Detail lengkap mengenai sertifikat kelima.' },
    { id: 6, title: 'Sertifikat 6', desc: 'Detail lengkap mengenai sertifikat keenam.' },
  ];

  return (
    <section id="sertifikat" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 bg-white overflow-hidden">

      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[700px] pointer-events-none z-0 opacity-90">
        <Image src="/Asset/blur.png" alt="Blur kiri" fill className="object-contain" />
      </div>

      <div className="absolute -left-44 top-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] md:w-[580px] h-[580px] pointer-events-none z-0 animate-[spin_50s_linear_infinite]">
        <Image src="/Asset/Star.png" alt="Star kiri" fill className="object-contain" />
      </div>

      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[700px] pointer-events-none z-0 opacity-90">
        <Image src="/Asset/blur.png" alt="Blur kanan" fill className="object-contain" />
      </div>

      <div className="absolute -right-44 top-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] md:w-[580px] h-[580px] pointer-events-none z-0 animate-[spin_60s_linear_infinite]">
        <Image src="/Asset/Star 3.png" alt="Star kanan" fill className="object-contain" />
      </div>

      <div className="w-full flex flex-col items-center gap-12 relative z-10">

        <div className="relative flex items-center justify-center">
          <div className="absolute -top-7 -left-7 w-12 h-12 sm:w-16 sm:h-16 z-20 pointer-events-none">
            <Image src="/Asset/Star 4.png" alt="Star 4" width={70} height={70} className="w-full h-full object-contain" />
          </div>

          <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 z-20 pointer-events-none">
            <Image src="/Asset/Star 5.png" alt="Star 5" width={70} height={70} className="w-full h-full object-contain" />
          </div>

          <div className="bg-[#5C3317] px-14 py-4 sm:px-24 sm:py-5 shadow-md">
            <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-wide text-center font-['Red_Rose']">
              Sertifikat
            </h2>
          </div>
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-10 pl-6 sm:pl-12 md:pl-16">
          <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">

            {[1, 2].map((group) => (
              <div key={group} className="flex gap-8 pr-8">
                {certificates.map((item) => (
                  <div
                    key={`${group}-${item.id}`}
                    onClick={() => onOpenModal?.(item)}
                    className="w-[300px] h-[210px] sm:w-[390px] sm:h-[270px] flex-shrink-0 bg-[#EBF400] border-2 border-black rounded-md p-3 cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
                  >
                    <div className="w-full h-full border-2 border-black/40 flex flex-col items-center justify-center text-center gap-3 p-4">
                      <span className="text-xs font-mono tracking-[3px] text-black/70">
                        CERTIFICATE
                      </span>

                      <div className="w-16 h-1 bg-black rounded-full" />

                      <h3 className="text-xl sm:text-2xl font-bold text-black">
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
            ))}

          </div>
        </div>

        <div className="w-full flex justify-center mt-2">
          <Link
            href="/sertifikat"
            className="w-full max-w-[200px] py-2.5 px-6 bg-white hover:bg-black/5 border border-black rounded-full text-black font-mono text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            &larr; selengkapnya
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}
