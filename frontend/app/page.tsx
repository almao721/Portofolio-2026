// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// interface Project {
//   id: number;
//   title: string;
//   category?: string;
//   description: string;
// }

// export default function HomePage() {
//   const [latestProjects, setLatestProjects] = useState<Project[]>([]);
//   const [loadingProjects, setLoadingProjects] = useState(true);

//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [statusMsg, setStatusMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchLatest = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/projects");
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         if (data.success && Array.isArray(data.data)) {
//           const sorted = [...data.data].reverse();
          
//           const targetOrder: Project[] = [];
//           if (sorted.length > 1) targetOrder.push(sorted[1]);
//           if (sorted.length > 0) targetOrder.push(sorted[0]);
//           if (sorted.length > 2) targetOrder.push(sorted[2]);

//           const projectsWithCategory = targetOrder.map((proj: any) => ({
//             ...proj,
//             category: "kategorinya ikan"
//           }));
//           setLatestProjects(projectsWithCategory);
//         }
//       } catch (err) {
//         console.error("Gagal memuat proyek terbaru:", err);
//       } finally {
//         setLoadingProjects(false);
//       }
//     };

//     fetchLatest();
//   }, []);

//   const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const isFormValid =
//     formData.name.trim() !== "" &&
//     formData.email.trim() !== "" &&
//     formData.message.trim() !== "" &&
//     isValidEmail(formData.email);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isFormValid) return;
//     setLoading(true);
//     setStatusMsg("");

//     try {
//       const res = await fetch("http://localhost:3000/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (data.success) {
//         setStatusMsg("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatusMsg("error");
//       }
//     } catch {
//       setStatusMsg("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="container">
//       <section className="hero">
//         <h1>Portofolio Saya</h1>
//         <p>Selamat datang di website portofolio Full-Stack Web Development!</p>
//       </section>

//       <section className="section">
//         <h2 className="section-title">Proyek Terbaru</h2>

//         {loadingProjects ? (
//           <div className="loading">
//             <div className="loading-spinner"></div>
//             <p>Memuat proyek terbaru...</p>
//           </div>
//         ) : latestProjects.length === 0 ? (
//           <div className="empty-state">
//             <p>Belum ada proyek terbaru.</p>
//           </div>
//         ) : (
//           <div className="project-grid">
//             {latestProjects.map((project) => (
//               <div key={project.id} className="project-card">
//                 <h3>{project.title}</h3>

//                 <span className={`category-badge ${!project.category ? "uncategorized" : ""}`}>
//                   {project.category || "Uncategorized"}
//                 </span>

//                 <p>{project.description}</p>

//                 <div className="card-footer">
//                   <Link href={`/projects/${project.id}`} className="view-detail">
//                     Lihat Detail →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <section className="section" style={{ maxWidth: "600px", margin: "0 auto" }}>
//         <h2 className="section-title" id="contact">Hubungi Saya</h2>

//         <div className="contact-form">
//           {statusMsg === "success" && (
//             <div className="alert alert-success">✅ Pesan berhasil dikirim!</div>
//           )}
//           {statusMsg === "error" && (
//             <div className="alert alert-error">❌ Gagal mengirim pesan. Coba lagi!</div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Nama</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 placeholder="Masukkan nama Anda"
//               />
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className={formData.email && !isValidEmail(formData.email) ? "input-error" : ""}
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 placeholder="nama@gmail.com"
//               />
//             </div>

//             <div className="form-group">
//               <label>Pesan</label>
//               <textarea
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 placeholder="Tulis pesan Anda di sini..."
//               />
//             </div>

//             <button type="submit" disabled={!isFormValid || loading} className="btn-submit">
//               {loading ? "Mengirim..." : "Kirim Pesan"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// }

// app/page.js
'use client';

import React, { useState } from 'react';
import Navbar from './Navbar/page';
import HeroSection from './Hero/page';
import ProjectSection from './Project/page';
import TestimoniSection from './Testimoni/page';
import SkillSection from './Skill/page';
import SertifikatSection from './sertifikat/page';
import ContactSection from './Contact/page';
import Footer from './Footer/page';

export default function Home() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <main className="min-h-screen w-full bg-white text-black overflow-x-hidden relative">
      
      {/* BACKGROUND GLOBAL & BLUR UTAMA DI HALAMAN BERANDA */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[550px] h-[700px] opacity-80 bg-radial-gradient" />
        <div className="absolute top-2/3 -right-32 w-[550px] h-[700px] opacity-80 bg-radial-gradient" />
      </div>

      {/* NAVBAR FIXED */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* SEMUA SECTION BERANDA */}
      <HeroSection />
      <ProjectSection />
      <TestimoniSection />
      <SkillSection />
      <SertifikatSection onOpenModal={(cert) => setSelectedCert(cert)} />
      <ContactSection />
      <Footer />

      {/* GLOBAL MODAL POPUP SERTIFIKAT */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-[#EBF400] border-4 border-black rounded-[30px] p-8 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in duration-200">
            
            {/* Tombol Silang (X) di luar sudut kanan atas kotak */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white hover:bg-red-500 hover:text-white border-2 border-black rounded-full flex items-center justify-center text-black font-bold shadow-lg transition-all z-50 cursor-pointer"
            >
              &#10005;
            </button>

            <h3 className="text-2xl sm:text-3xl font-black text-black mb-4 font-['Red_Rose']">
              {selectedCert.title}
            </h3>
            <p className="text-sm sm:text-base text-black/80 font-sans mb-6">
              {selectedCert.desc}
            </p>
            <div className="w-full h-48 bg-white/50 border border-black/30 rounded-[20px] flex items-center justify-center mb-6">
              <span className="text-sm font-mono text-black/60">[ Preview Sertifikat ]</span>
            </div>
            <button 
              onClick={() => setSelectedCert(null)}
              className="px-8 py-2.5 bg-black text-white font-bold rounded-full hover:bg-black/80 transition shadow-sm text-sm"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}