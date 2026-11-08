
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '../Navbar/page';
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa';

export default function AboutPage() {
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = contentRef.current;

    if (!element) return;

    const items = element.querySelectorAll('.about-popup');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
          } else {
            entry.target.classList.remove('about-visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#ffffdf] flex flex-col">

      {/* BACKGROUND PNG DECORATION */}
      <div className="absolute inset-0 pointer-events-none z-0">

        <Image
          src="/Asset/Vector 1.png"
          alt=""
          width={350}
          height={350}
          className="absolute -top-16 -left-20 w-[350px] h-auto opacity-70"
        />

        <Image
          src="/Asset/Vector 2.png"
          alt=""
          width={350}
          height={350}
          className="absolute bottom-0 -right-16 w-[350px] h-auto opacity-70"
        />

      </div>

      {/* NAVBAR FIXED TOP */}
      <div className="fixed top-0 left-0 w-full px-5 sm:px-10 z-50">
        <div className="w-full max-w-6xl mx-auto">
          <Navbar />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section
        ref={contentRef}
        className="relative z-10 flex-1 w-full max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col justify-center pt-32 pb-32"
      >

        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-7">

          {/* PROFILE CARD */}
          <div className="about-popup relative w-full max-w-[412px] shrink-0">

            <div className="w-full border border-black rounded-[25px] p-5 bg-white/20 backdrop-blur-sm">

              {/* PROFILE IMAGE */}
              <div className="relative w-full aspect-square rounded-[35px] overflow-hidden bg-black">

                <Image
                  src="/Asset/james.jpg"
                  alt="james"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 412px"
                  className="object-cover"
                />

              </div>

              {/* PROFILE INFORMATION */}
              <div className="text-center text-black mt-4">

                <h3 className="text-xl font-bold">
                  Al Maghfira Tiara Hisbaini
                </h3>

                <p className="text-lg mt-1">
                  Makassar, 24 Agust 2009
                </p>

                <p className="text-lg">
                  Frontend dev
                </p>

              </div>
            </div>

            {/* STAR DECORATION */}
            <Image
              src="/Asset/Star 8.png"
              alt=""
              width={120}
              height={120}
              className="absolute -bottom-10 -left-12 w-28 h-28 object-contain z-20"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full flex-1 min-w-0 flex flex-col gap-6">

            {/* HELLO TITLE */}
            <div className="about-popup relative flex justify-center lg:justify-start">

              {/* STAR DECORATION */}
              <Image
                src="/Asset/Star 8.png"
                alt=""
                width={100}
                height={100}
                className="absolute -top-4 left-[20%] sm:left-[53%] lg:left-[52%] w-20 h-20 object-contain z-10"
              />

              <h1
                className="font-['Red_Rose'] text-7xl sm:text-8xl lg:text-[112px] font-black tracking-wide text-white leading-none z-20"
                style={{
                  WebkitTextStroke: '2px black',
                  paintOrder: 'stroke fill'
                }}
              >
                HELLO!
              </h1>

            </div>

            {/* BIODATA BOX */}
            <div className="about-popup w-full bg-[#E65C9F]/90 border-2 border-black p-5 sm:p-6 text-white shadow-sm min-h-[340px] flex flex-col justify-center gap-5">

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed">

                saya <span className="font-bold">
                  AL MAGHFIRA TIARA HISBAINI
                </span> di panggil akrab Alma. saya adalah seorang siswi
                SMK TELKOM MAKASSAR sebagai junior programmer dan
                Fullstack developer Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.

              </p>

              {/* EDUCATION */}
              <div>

                <h4 className="font-bold sm:text-lg">
                  Education
                </h4>

                <p className="text-sm font-light">
                  SMK TELKOM MAKASSAR
                </p>

              </div>

              {/* SKILL */}
              <div>

                <h4 className="font-bold sm:text-lg">
                  Skill & Software
                </h4>

                <p className="text-sm leading-relaxed">
                  Teamwork, Problem solving, Video Editor,
                  Graphic Design, Blender, Next.js, Tailwind,
                  CSS, JavaScript, PHP, Laravel
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA FIXED BOTTOM - TANPA ANIMASI */}
      <footer className="fixed bottom-0 left-0 w-full z-20 px-2 sm:px-9">

        <div className="w-full max-w-9xl mx-auto grid grid-cols-3 gap-2 sm:gap-80 font-['Poor_Story']">

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/amth08"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#500027] text-white py-3 px-2 sm:px-4 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-xl hover:bg-[#720039] transition"
          >
            <FaInstagram className="shrink-0" />
            <span>@amth08</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/almao721"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#500027] text-white py-3 px-2 sm:px-4 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-xl hover:bg-[#720039] transition"
          >
            <FaGithub className="shrink-0" />
            <span>almao721</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/62811466604"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#500027] text-white py-3 px-2 sm:px-4 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-xl hover:bg-[#720039] transition"
          >
            <FaWhatsapp className="shrink-0" />
            <span>(+62)811-466-604</span>
          </a>

        </div>

      </footer>

      {/* ABOUT PAGE POPUP ANIMATION */}
      <style jsx global>{`
        .about-popup {
          opacity: 0;
          visibility: hidden;
          transform: translate3d(0, 90px, 0) scale(0.95);
          filter: blur(5px);

          transition:
            opacity 0.8s ease,
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.8s ease,
            visibility 0.8s ease;

          will-change: opacity, transform, filter;
        }

        .about-popup.about-visible {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-popup {
            opacity: 1;
            visibility: visible;
            transform: none;
            filter: none;
            transition: none;
          }
        }
      `}</style>

    </main>
  );
}
