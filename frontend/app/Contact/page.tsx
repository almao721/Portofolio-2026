'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json();
        if (data.success) {
                setStatusMsg('Terkirim!');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
              } else {
                setStatusMsg('Gagal mengirim pesan.');
              }
            } catch (err) {
              setStatusMsg('Gagal mengirim pesan.');
            }
  };

  return (
    <section id="kontak" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-5 md:px-12 bg-white overflow-hidden">
      <div className="absolute bottom-[-500px] left-[-600px] w-[990px] h-[990px] z-0 pointer-events-none">
        <Image src="/Asset/Star 12.png" alt="Star bawah kiri" fill className="object-contain" />
      </div>

      <div className="absolute bottom-[-500px] right-[-600px] w-[999px] h-[990px] z-0 pointer-events-none -scale-x-100">
        <Image src="/Asset/Star 12.png" alt="Star bawah kanan" fill className="object-contain" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
        <div className="relative w-full lg:w-7/12">
          <div className="absolute -top-28 -left-24 w-[300px] h-[300px] z-0 pointer-events-none">
            <Image src="/Asset/blur.png" alt="Blur kiri atas" fill className="object-contain" />
          </div>

          <div className="absolute -top-12 -left-8 w-20 h-20 sm:w-28 sm:h-28 z-10 pointer-events-none">
            <Image src="/Asset/Star 9.png" alt="Star kiri atas" fill className="object-contain" />
          </div>

          <div className="absolute -bottom-28 -right-24 w-[300px] h-[300px] z-0 pointer-events-none">
            <Image src="/Asset/blur.png" alt="Blur kanan bawah" fill className="object-contain" />
          </div>

          <div className="absolute -bottom-10 -right-8 w-20 h-20 sm:w-28 sm:h-28 z-10 pointer-events-none">
            <Image src="/Asset/Star 9.png" alt="Star kanan bawah" fill className="object-contain" />
          </div>

          <div className="relative z-10 border border-black rounded-[40px] p-6 sm:p-7 md:p-8 bg-white/30 backdrop-blur-[2px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-black/50 rounded-[15px] px-4 py-5 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono bg-white/30"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full min-w-0 border border-black/50 rounded-[15px] px-4 py-5 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono bg-white/30"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full min-w-0 border border-black/50 rounded-[15px] px-4 py-5 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono bg-white/30"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border border-black/50 rounded-[15px] px-4 py-4 text-sm sm:text-base outline-none focus:border-black transition placeholder:text-black/40 font-mono resize-none bg-white/30"
              />

              <button
                type="submit"
                className="w-full py-3.5 bg-[#E88D4D] hover:bg-[#d67b3b] text-white font-bold rounded-full transition shadow-md mt-2 tracking-wide"
              >
                Send Message
              </button>

              {statusMsg && (
                <p className="text-xs font-mono text-center text-green-600 mt-2 font-bold">{statusMsg}</p>
              )}
            </form>
          </div>
        </div>

        <div className="relative w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left select-none">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-black tracking-tighter leading-none">
            LET'S GET
          </h1>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-black tracking-tighter leading-none mt-3">
            IN TOUCH
          </h1>
        </div>
      </div>
    </section>
  );
}