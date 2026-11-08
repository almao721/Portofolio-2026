'use client';

import React, { useState, useEffect } from 'react';

export default function PublicCertificatesPage() {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/certificates')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCertificates(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-white text-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-black mb-12 tracking-tight">CERTIFICATES</h1>

        {loading ? (
          <p className="text-sm font-mono text-gray-400">Memuat data...</p>
        ) : certificates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {certificates.map((cert) => (
              <div key={cert.id} className="border border-black rounded-[30px] p-5 flex flex-col gap-4 bg-white shadow-sm">
                <div className="w-full h-48 bg-gray-100 border border-black/20 rounded-[20px] overflow-hidden flex items-center justify-center">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-gray-400 font-mono">No Certificate Image</span>
                  )}
                </div>
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-xs text-gray-500 font-mono">Penerbit: {cert.issuer || '-'}</p>
                <p className="text-xs text-gray-600 line-clamp-2">{cert.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full border border-dashed border-gray-300 rounded-[30px] p-16 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-mono text-gray-400">Belum ada sertifikat yang ditambahkan.</p>
            <p className="text-xs text-gray-400 mt-1">Data akan muncul di sini setelah kamu menambahkannya melalui Admin Dashboard.</p>
          </div>
        )}
      </div>
    </main>
  );
}