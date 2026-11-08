'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../Navbar/page';
import { FaImage } from 'react-icons/fa';

export default function SertifikatPage() {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/certificates');
      const data = await res.json();
      if (data.success) {
        setCertificates(data.data);
      }
    } catch (err) {
      console.error('Gagal mengambil data sertifikat:', err);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-black overflow-hidden pt-32">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 0% 5%, rgba(255, 180, 80, 0.65), transparent 28%),
            radial-gradient(circle at 0% 0%, rgba(255, 105, 180, 0.35), transparent 25%),
            radial-gradient(circle at 100% 100%, rgba(255, 105, 180, 0.45), transparent 30%),
            radial-gradient(circle at 100% 100%, rgba(255, 220, 120, 0.3), transparent 40%)
          `,
        }}
      />

      {/* BACKGROUND STAR KANAN ATAS */}
      <div className="absolute -right-32 -top-24 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] z-0 pointer-events-none">
        <Image
          src="/Asset/Star 3.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 400px, 500px"
          className="object-contain"
        />
      </div>

      {/* BACKGROUND STAR KIRI BAWAH */}
      <div className="absolute -left-40 bottom-[-150px] w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] z-0 pointer-events-none">
        <Image
          src="/Asset/Star.png"
          alt=""
          fill
          sizes="(max-width: 640px) 500px, 650px"
          className="object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <section className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-8 pb-20">

        {/* JUDUL SERTIFIKAT */}
        <div className="relative flex items-center justify-center mb-20 mt-5">

          {/* STAR KIRI ATAS */}
          <div className="absolute -top-14 -left-12 sm:-left-16 w-20 h-20 sm:w-28 sm:h-28 z-20 pointer-events-none">
            <Image
              src="/Asset/Star.png"
              alt=""
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>

          {/* STAR KANAN BAWAH */}
          <div className="absolute -bottom-12 -right-12 sm:-right-16 w-20 h-20 sm:w-28 sm:h-28 z-20 pointer-events-none">
            <Image
              src="/Asset/Star 10.png"
              alt=""
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>

          {/* KOTAK COKELAT */}
          <div className="relative bg-[#5C3317] px-12 py-5 sm:px-16 sm:py-7 shadow-md rounded-2xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide text-center font-['Red_Rose']">
              Sertifikat
            </h1>
          </div>

        </div>

        {/* GRID KARTU SERTIFIKAT DARI DATABASE */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 relative z-10">

          {certificates.length > 0 ? (
            certificates.map((item) => (
              <div
                key={item.id}
                onClick={() => item.image && setSelectedImage(item.image)}
                className="
                  relative w-full
                  bg-[#EBF400]
                  border-2 border-black
                  rounded-2xl
                  shadow-md
                  p-4
                  cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:scale-[1.02]
                  flex flex-col
                  gap-3
                "
              >
                {/* GAMBAR SERTIFIKAT */}
                <div className="w-full h-48 bg-white rounded-xl overflow-hidden border-2 border-black flex items-center justify-center relative">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <FaImage className="text-gray-400 text-3xl" />
                  )}
                </div>

                {/* INFO SERTIFIKAT */}
                <div className="flex flex-col gap-1 text-center">
                  <span className="text-[10px] font-mono tracking-[2px] text-black/60">
                    CERTIFICATE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-black font-['Red_Rose'] line-clamp-1">
                    {item.title}
                  </h3>
                  {item.issuer && (
                    <p className="text-xs font-semibold text-black/80">
                      {item.issuer}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-xs text-black/70 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="text-center mt-auto pt-2 border-t border-black/10">
                  <span className="text-[10px] font-mono font-bold text-black/60">
                    CLICK TO ZOOM
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 font-mono py-10">
              Belum ada sertifikat yang ditambahkan dari admin.
            </p>
          )}

        </div>
      </section>

      {/* MODAL ZOOM GAMBAR */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden p-2 border-2 border-black">
            <img src={selectedImage} alt="Zoom Sertifikat" className="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto" />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full font-bold text-sm hover:bg-gray-800"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}