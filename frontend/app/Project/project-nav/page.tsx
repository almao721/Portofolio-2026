'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../Navbar/page';

export default function ProjectPage() {
  const [projectList, setProjectList] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProjectList(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-white text-black overflow-hidden">
      <Navbar />

      <section className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center px-5 sm:px-8 pt-44 pb-24">
        <div className="bg-[#F51D91] px-10 py-2 sm:px-14 sm:py-3 relative mb-16">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-none text-center font-['Red_Rose']">
            project
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl z-10">
          {projectList.map((item: any, index: number) => (
            <div
              key={item.id}
              className="relative w-full bg-white border border-black rounded-[30px] p-3 sm:p-4 flex flex-col items-center gap-2 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="w-full h-28 sm:h-44 bg-[#E6F800] border border-black rounded-[20px] flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs font-mono text-black/50">No Image</span>
                )}
              </div>

              <div className="w-full text-center py-1">
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight font-['Red_Rose']">
                  {item.title}
                </h3>
                {item.href && (
                  <a href={item.href} target="_blank" rel="noreferrer" className="text-xs text-blue-600 underline font-mono block mt-1">
                    Kunjungi Website &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}