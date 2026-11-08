'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimoniSection() {
  const [approvedTestimonials, setApprovedTestimonials] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials/approved')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setApprovedTestimonials(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMsg('Terkirim!');
        setName('');
        setMessage('');
      } else {
        setStatusMsg('Gagal mengirim testimoni.');
      }
    } catch (err) {
      setStatusMsg('Gagal mengirim testimoni.');
    }
  };

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

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            {approvedTestimonials.length > 0 ? (
              approvedTestimonials.map((item: any, index: number) => (
                <div key={item.id || index} className="relative w-full bg-white border border-black rounded-[25px] p-3 flex flex-col justify-between shadow-sm min-h-[110px]">
                  <div className="absolute -top-5 -left-6 w-15 h-15 z-20 pointer-events-none">
                    <Image src="/Asset/Star 7.png" alt="Star" width={50} height={50} className="w-full h-full object-contain" />
                  </div>

                  <div className="w-full bg-[#E6F800] border border-black rounded-[18px] py-4 px-3.5 flex flex-col gap-1.5">
                    <h4 className="font-bold text-black text-base sm:text-lg">{item.name}</h4>
                    <p className="text-[11px] sm:text-xs text-black/80 font-sans leading-snug">{item.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-500 font-mono text-center">Belum ada testimoni.</p>
            )}
          </div>

          <div className="w-full lg:w-6/12 flex flex-col items-center gap-4 relative">
            <div className="relative flex items-center justify-center select-none text-center">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter leading-none font-['Overlock_SC']">
                TESTIMONI
              </h2>
            </div>

            <div className="w-full relative border border-black rounded-[40px] p-6 sm:p-7 md:p-8 bg-white/30 backdrop-blur-[2px] flex flex-col gap-4 z-30 shadow-sm justify-center">
              <h3 className="text-center font-bold text-black text-base sm:text-lg">Masukkan pendapat mu juga!</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <input
                  type="text"
                  placeholder="Masukkan Nama anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#EAEAEA] border border-black/20 rounded-full py-2.5 px-5 text-xs sm:text-sm text-black focus:outline-none focus:border-black"
                />

                <textarea
                  placeholder="Masukkan Pesan"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-[#EAEAEA] border border-black/20 rounded-[20px] py-2.5 px-5 text-xs sm:text-sm text-black focus:outline-none focus:border-black resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#FF2D92] hover:bg-[#e0247f] text-white font-bold py-2.5 rounded-full transition-all shadow-sm text-xs sm:text-sm"
                >
                  Kirim
                </button>
                {statusMsg && <p className="text-xs text-center text-green-600 font-mono font-bold">{statusMsg}</p>}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}