
'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#4A0023] text-white pt-16 pb-8 px-6 md:px-16">

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">

        {/* PROFILE */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
            AL MAGHFIRA TIARA HISBAINI
          </h2>

          <p className="text-sm text-pink-200/80 font-medium">
            Frontend Developer
          </p>

          <p className="text-xs text-pink-100/70 leading-relaxed max-w-sm mt-1">
            Turning ideas into modern experiences with passion and precision.
            Let's create something extraordinary together.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="flex flex-col gap-2 text-xs text-pink-100/80">
            <li>
              <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                About Me
              </Link>
            </li>

            <li>
              <Link href="/Project" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Projects
              </Link>
            </li>

            <li>
              <Link href="/sertifikat" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Certificates
              </Link>
            </li>

            <li>
              <Link href="/#kontak" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-white">
            Connect
          </h3>

          <div className="flex items-center gap-3 text-pink-200">
            <a
              href="https://github.com/almao721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/al-maghfira-tiara-hisbaini-90125a381/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="https://www.instagram.com/amth08/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="mailto:qlmaaoo@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="w-full max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-pink-200/60 gap-4">
        <p>
          &copy; {new Date().getFullYear()} Alma. All rights reserved.
        </p>

        <p>
          Designed & Built with Next.js & Tailwind CSS
        </p>
      </div>

    </footer>
  );
}
