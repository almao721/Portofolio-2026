import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className="sticky top-4 z-50 w-full px-4 flex justify-center pt-10">
        <nav className="w-full max-w-4xl bg-[#E88D4D]/90 backdrop-blur-md rounded-full px-6 py-3 text-white flex justify-center items-center shadow-lg mx-auto">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 font-medium text-sm md:text-base">
            <li><Link href="/" className="hover:opacity-80 transition">Home</Link></li>
            <li><Link href="/about" className="hover:opacity-80 transition">About</Link></li>
            <li><Link href="/project" className="hover:opacity-80 transition">Project</Link></li>
            <li><Link href="/#skill" className="hover:opacity-80 transition">Skill</Link></li>
            <li><Link href="/sertifikat" className="hover:opacity-80 transition">Sertifikat</Link></li>
            <li><Link href="/#kontak" className="hover:opacity-80 transition">Kontak</Link></li>
          </ul>
        </nav>
      </header>

      {/* Pintu Masuk Admin Rahasia di Pojok Kanan Bawah */}
      <Link 
        href="/admin" 
        title="Admin Login"
        className="fixed bottom-6 right-6 z-50 text-2xl bg-white border-2 border-black p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center w-12 h-12"
      >
        🍗
      </Link>
    </>
  );
};

export default Navbar;