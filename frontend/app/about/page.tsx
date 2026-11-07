import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function AboutPage() {
  return (
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 md:px-12 bg-white overflow-hidden">
        <Navbar />
        <div 
            className="absolute inset-0 -z-10 bg-radial-gradient pointer-events-none opacity-70"
            style={{
            background: 'radial-gradient(circle at 15% 20%, rgba(255, 223, 128, 0.6) 0%, rgba(255, 105, 180, 0.4) 35%, rgba(255, 255, 255, 0) 70%), radial-gradient(circle at 85% 60%, rgba(255, 105, 180, 0.4) 0%, rgba(255, 223, 128, 0.5) 40%, rgba(255, 255, 255, 0) 70%)'
            }}
        />


      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10 relative z-10 mt-10">
        
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12">
          <div className="relative w-full max-w-sm bg-white/80 backdrop-blur-sm border border-black/30 rounded-[35px] p-6 flex flex-col items-center text-center shadow-sm">
            
            <div className="relative w-full h-72 sm:h-80 rounded-[25px] overflow-hidden border border-black/10 bg-black mb-4">
              <Image 
                src="/Asset/hero pic.png" 
                alt="Al Maghfira Tiara Hisbaini" 
                fill
                priority
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-bold text-black tracking-tight">
              Al Maghfira Tiara Hisbaini
            </h3>
            <p className="text-xs text-black/80 font-medium mt-1">
              Makassar, 24 Agust 2009
            </p>
            <p className="text-xs text-black/70 font-sans mt-0.5">
              Frontend dev
            </p>

            <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-14 sm:h-14 z-20 pointer-events-none">
              <Image 
                src="/Asset/Star 1.png" 
                alt="Star Decoration" 
                width={60} 
                height={60} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* KANAN: HELLO! & Kotak Deskripsi */}
          <div className="w-full max-w-2xl flex flex-col items-center lg:items-start gap-4">
            
            <div className="relative flex items-center select-none">
              <h1 className="text-6xl sm:text-8xl font-black text-white tracking-wider" style={{ WebkitTextStroke: '2px black' }}>
                HELLO!
              </h1>
              <div className="absolute -top-3 -right-10 w-12 h-12 sm:w-16 sm:h-16 z-10 pointer-events-none">
                <Image 
                  src="/Asset/Star 1.png" 
                  alt="Star Decoration" 
                  width={70} 
                  height={70} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="w-full bg-[#E974B4] border border-black/80 rounded-[25px] p-6 sm:p-8 text-white flex flex-col gap-5 shadow-sm">
              <p className="text-sm sm:text-base leading-relaxed font-sans text-white/95">
                saya <span className="font-bold">AL MAGHFIRA TIARA HISBAINI</span> di panggil akrab Alma. saya adalah seorang siswi SMK TELKOM MAKASSAR sebagai junior programmer dan Fullstact developer Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                  Education
                </h4>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  SMK TELKOM MAKASSAR
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                  Skill & Software
                </h4>
                <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed">
                  Teamwork, Public Speaking, Video Editor, Graphic Design, Blender, Next.js, Tailwind, CSS, JavaScript, PHP, Laravel
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR: Sosmed */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <a 
            href="https://instagram.com/amth08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2D0A1E] text-white py-3 px-6 rounded-md flex items-center justify-center gap-3 text-sm font-mono hover:bg-[#3d0f29] transition shadow-sm"
          >
            <FaInstagram className="text-base" />
            <span>@amth08</span>
          </a>

          <a 
            href="https://github.com/almao721" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2D0A1E] text-white py-3 px-6 rounded-md flex items-center justify-center gap-3 text-sm font-mono hover:bg-[#3d0f29] transition shadow-sm"
          >
            <FaGithub className="text-base" />
            <span>almao721</span>
          </a>

          <a 
            href="https://wa.me/62811466604" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2D0A1E] text-white py-3 px-6 rounded-md flex items-center justify-center gap-3 text-sm font-mono hover:bg-[#3d0f29] transition shadow-sm"
          >
            <FaWhatsapp className="text-base" />
            <span>(+62)811-466-604</span>
          </a>
        </div>

      </div>

    </main>
  );
}