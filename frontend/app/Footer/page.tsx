'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#4A0023] text-white pt-16 pb-8 px-6 md:px-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white">AL MAGHFIRA TIARA HISBAINI</h2>
          <p className="text-sm text-pink-200/80 font-medium">Frontend Developer</p>
          <p className="text-xs text-pink-100/70 leading-relaxed max-w-sm mt-1">
            Turning ideas into modern experiences with passion and precision. Let's create something extraordinary together.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-xs text-pink-100/80">
            <li><Link href="/about" className="hover:text-white transition">About Me</Link></li>
            <li><Link href="/project" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="/sertifikat" className="hover:text-white transition">Certificates</Link></li>
            <li><Link href="/kontak" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-white">Connect</h3>
          <div className="flex items-center gap-3 text-pink-200">
            <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"><FaGithub size={16} /></a>
            <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"><FaLinkedinIn size={16} /></a>
            <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"><FaInstagram size={16} /></a>
            <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"><FaEnvelope size={16} /></a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-pink-200/60 gap-4">
        <p>&copy; {new Date().getFullYear()} Alma. All rights reserved.</p>
        <p>Designed & Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}