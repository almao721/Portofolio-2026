
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      active: pathname === '/',
    },
    {
      name: 'About',
      href: '/about',
      active: pathname === '/about',
    },
    {
      name: 'Project',
      href: '/Project/project-nav',
      active: pathname.startsWith('/Project'),
    },
    {
      name: 'Skill',
      href: '/#skill',
      active: false,
    },
    {
      name: 'Sertifikat',
      href: '/sertifikat/Sertifikat-nav',
      active: pathname.startsWith('/sertifikat'),
    },
    {
      name: 'Kontak',
      href: '/#kontak',
      active: false,
    },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 z-50 w-full px-4 flex justify-center">
        <nav className="
          w-full max-w-4xl
          bg-[#E88D4D]/95
          backdrop-blur-md
          rounded-full
          px-4 sm:px-6 py-3
          text-white
          flex justify-center items-center
          shadow-lg
          border border-white/20
        ">
          <ul className="
            flex flex-wrap justify-center items-center
            gap-3 sm:gap-8
            font-medium text-sm md:text-base
            font-normal
          ">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    relative inline-block py-1
                    transition-all duration-300 ease-out
                    hover:scale-110 hover:text-[#FFF1B8]
                    active:scale-125
                    ${item.active
                      ? 'text-[#FFF1B8] scale-105'
                      : 'text-white'}
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-[#FFF1B8]
                    after:transition-all after:duration-300
                    ${item.active
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'}
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Link
        href="/admin"
        title="Admin Login"
        aria-label="Admin Login"
        className="
          fixed bottom-6 right-6 z-50
          text-2xl bg-white
          border-1 border-black
          rounded-full shadow-xl
          hover:scale-125 hover:rotate-12
          active:scale-90
          transition-all duration-300
          flex items-center justify-center
          w-12 h-12
        "
      >
        🍗
      </Link>
    </>
  );
};

export default Navbar;
