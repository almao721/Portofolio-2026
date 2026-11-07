'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Ganti password sesuai keinginan kamu di sini
    if (password === 'ayammalang123') {
      router.push('/admin/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border-2 border-black rounded-[30px] p-8 shadow-sm flex flex-col items-center">
        <span className="text-4xl mb-3">🍗</span>
        <h1 className="text-2xl font-black text-black tracking-tight mb-2">ADMIN PORTAL</h1>
        <p className="text-xs text-black/60 font-mono mb-6 text-center">Masukkan password rahasia untuk mengakses dashboard.</p>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input 
            type="password" 
            placeholder="Password Rahasia" 
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            className="w-full border border-black/30 rounded-full px-5 py-3.5 text-sm outline-none focus:border-black transition text-black font-mono"
          />
          {error && <p className="text-xs text-red-500 font-mono text-center">Password salah, Coba lagi!</p>}

          <button 
            type="submit"
            className="w-full py-3.5 bg-[#E88D4D] hover:bg-[#d67b3b] text-white font-bold rounded-full transition shadow-md tracking-wide"
          >
            Masuk Dashboard
          </button>
        </form>
      </div>
    </main>
  );
}