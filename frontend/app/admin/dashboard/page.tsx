'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaBox, 
  FaCertificate, 
  FaEnvelope, 
  FaCommentAlt,
  FaSignOutAlt, 
  FaPlus, 
  FaTrash, 
  FaEdit, 
  FaCheck, 
  FaTimes, 
  FaExternalLinkAlt,
  FaImage
} from 'react-icons/fa';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates' | 'messages' | 'testimonials'>('projects');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [title, setTitle] = useState('');
  const [href, setHref] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const [projects, setProjects] = useState([
    { id: 1, title: 'Temu!n', href: 'https://temuin.com', image: '/Asset/project-temuin.png' },
    { id: 2, title: 'About Martin', href: 'https://martin.com', image: '/Asset/project-martin.png' },
  ]);

  const [certificates, setCertificates] = useState([
    { id: 1, title: 'Sertifikat Web Dev', image: '/Asset/cert1.png' },
    { id: 2, title: 'Sertifikat Frontend', image: '/Asset/cert2.png' },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, name: 'Andi Pratama', email: 'andi@gmail.com', phone: '08123456789', message: 'Halo Alma, ingin berdiskusi seputar pembuatan website sekolah.' },
  ]);

  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'Budi Santoso', message: 'Website portofolionya keren banget dan interaktif!', status: 'pending' },
    { id: 2, name: 'Siti Rahma', message: 'Desainnya estetik, pertahankan ya!', status: 'approved' },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditId(item.id);
      setTitle(item.title);
      setHref(item.href || '');
      setImagePreview(item.image || '');
    } else {
      setEditId(null);
      setTitle('');
      setHref('');
      setImagePreview('');
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'projects') {
      if (editId) {
        setProjects(projects.map(p => p.id === editId ? { ...p, title, href, image: imagePreview } : p));
      } else {
        setProjects([...projects, { id: Date.now(), title, href, image: imagePreview }]);
      }
    } else if (activeTab === 'certificates') {
      if (editId) {
        setCertificates(certificates.map(c => c.id === editId ? { ...c, title, image: imagePreview } : c));
      } else {
        setCertificates([...certificates, { id: Date.now(), title, image: imagePreview }]);
      }
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (activeTab === 'projects') {
      setProjects(projects.filter(p => p.id !== id));
    } else if (activeTab === 'certificates') {
      setCertificates(certificates.filter(c => c.id !== id));
    } else if (activeTab === 'messages') {
      setMessages(messages.filter(m => m.id !== id));
    } else if (activeTab === 'testimonials') {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const handleTestimonialStatus = (id: number, status: string) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, status } : t));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex text-black">
      
      <aside className="w-64 bg-[#4A0023] text-white hidden md:flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <h1 className="font-extrabold text-lg tracking-wider justify-center text-center pl-5">Welcome,Alma!</h1>
          </div>

          <nav className="flex flex-col gap-2 font-mono text-sm">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'projects' ? 'bg-[#E88D4D] text-white font-bold' : 'text-pink-200/80 hover:bg-white/10'}`}
            >
              <FaBox /> Kelola Project
            </button>
            <button 
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'certificates' ? 'bg-[#E88D4D] text-white font-bold' : 'text-pink-200/80 hover:bg-white/10'}`}
            >
              <FaCertificate /> Kelola Sertifikat
            </button>
            <button 
              onClick={() => setActiveTab('messages')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'messages' ? 'bg-[#E88D4D] text-white font-bold' : 'text-pink-200/80 hover:bg-white/10'}`}
            >
              <FaEnvelope /> Pesan Masuk
            </button>
            <button 
              onClick={() => setActiveTab('testimonials')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'testimonials' ? 'bg-[#E88D4D] text-white font-bold' : 'text-pink-200/80 hover:bg-white/10'}`}
            >
              <FaCommentAlt /> Moderasi Testimoni
            </button>
          </nav>
        </div>

        <Link 
          href="/"
          className="flex text-center justify-center items-center gap-3 px-4 py-3 rounded-xl text-pink-200 bg-red-500/40 hover:bg-red-200/20 hover:text-red-200 transition font-mono text-sm"
        >
          <FaSignOutAlt /> Keluar
        </Link>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-gray-200">
        <header className="bg-white border-b border-gray-300 px-20 py-8 flex justify-between items-center shadow-sm">
          <div>
            <h2 className="text-3xl font-bold font-extrabold capitalize">Dashboard / {activeTab}</h2>
            <p className="text-xs text-gray-500 font-mono">Halo Alma, kamu bisa kelola konten website portofolo mu disini!</p>
          </div>
        </header>

        <div className="p-8 max-w-5xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] text-gray-400 font-mono uppercase">Total Projects</p>
                <h3 className="text-xl font-black mt-1">{projects.length}</h3>
              </div>
              <div className="p-3 bg-orange-100 text-[#E88D4D] rounded-xl"><FaBox size={18} /></div>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] text-gray-400 font-mono uppercase">Total Sertifikat</p>
                <h3 className="text-xl font-black mt-1">{certificates.length}</h3>
              </div>
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl"><FaCertificate size={18} /></div>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] text-gray-400 font-mono uppercase">Pesan Masuk</p>
                <h3 className="text-xl font-black mt-1">{messages.length}</h3>
              </div>
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><FaEnvelope size={18} /></div>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] text-gray-400 font-mono uppercase">Testimoni</p>
                <h3 className="text-xl font-black mt-1">{testimonials.length}</h3>
              </div>
              <div className="p-3 bg-pink-100 text-pink-600 rounded-xl"><FaCommentAlt size={18} /></div>
            </div>
          </div>

          {(activeTab === 'projects' || activeTab === 'certificates') && (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg capitalize">Daftar {activeTab === 'projects' ? 'Project' : 'Sertifikat'}</h3>
                <button 
                  onClick={() => handleOpenModal()}
                  className="bg-[#E88D4D] hover:bg-[#d67b3b] text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition shadow-sm"
                >
                  <FaPlus size={12} /> Tambah {activeTab === 'projects' ? 'Project' : 'Sertifikat'}
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400 font-mono">
                      <th className="py-3 px-4">Gambar</th>
                      <th className="py-3 px-4">Judul</th>
                      {activeTab === 'projects' && <th className="py-3 px-4">Link Website (href)</th>}
                      <th className="py-3 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {(activeTab === 'projects' ? projects : certificates).map((item: any) => (
                      <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                        <td className="py-3 px-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                            {item.image ? (
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            ) : (
                              <FaImage className="text-gray-400" />
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 font-bold">{item.title}</td>
                        {activeTab === 'projects' && (
                          <td className="py-4 px-4 font-mono text-xs text-blue-600">
                            {item.href ? (
                              <a href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                                {item.href} <FaExternalLinkAlt size={10} />
                              </a>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                        )}
                        <td className="py-4 px-4 text-right flex items-center justify-end gap-2 pt-6">
                          <button 
                            onClick={() => handleOpenModal(item)}
                            className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 transition" 
                            title="Edit"
                          >
                            <FaEdit size={14} />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-2 bg-red-50 hover:bg-red-100 rounded-lg text-red-500 transition" 
                            title="Hapus"
                          >
                            <FaTrash size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Daftar Pesan Masuk (Kontak)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400 font-mono">
                      <th className="py-3 px-4">Nama</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Nomor</th>
                      <th className="py-3 px-4">Pesan</th>
                      <th className="py-3 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {messages.map((item) => (
                      <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                        <td className="py-4 px-4 font-bold">{item.name}</td>
                        <td className="py-4 px-4 text-xs font-mono text-gray-600">{item.email}</td>
                        <td className="py-4 px-4 text-xs font-mono text-gray-600">{item.phone}</td>
                        <td className="py-4 px-4 text-gray-600 max-w-xs">{item.message}</td>
                        <td className="py-4 px-4 text-right">
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-2 bg-red-50 hover:bg-red-100 rounded-lg text-red-500 transition" 
                            title="Hapus"
                          >
                            <FaTrash size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Moderasi Testimoni Masuk</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400 font-mono">
                      <th className="py-3 px-4">Pengirim</th>
                      <th className="py-3 px-4">Pesan</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {testimonials.map((item) => (
                      <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                        <td className="py-4 px-4 font-bold">{item.name}</td>
                        <td className="py-4 px-4 text-gray-600 max-w-xs truncate">{item.message}</td>
                        <td className="py-4 px-4">
                          <span className={`text-xs px-3 py-1 rounded-full font-mono ${
                            item.status === 'approved' ? 'bg-green-50 text-green-600' :
                            item.status === 'rejected' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleTestimonialStatus(item.id, 'approved')}
                            className="p-2 bg-green-50 hover:bg-green-100 rounded-lg text-green-600 transition" 
                            title="Terima"
                          >
                            <FaCheck size={14} />
                          </button>
                          <button 
                            onClick={() => handleTestimonialStatus(item.id, 'rejected')}
                            className="p-2 bg-yellow-50 hover:bg-yellow-100 rounded-lg text-yellow-600 transition" 
                            title="Tolak"
                          >
                            <FaTimes size={14} />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-2 bg-red-50 hover:bg-red-100 rounded-lg text-red-500 transition" 
                            title="Hapus"
                          >
                            <FaTrash size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg border border-gray-200">
            <h3 className="text-lg font-bold mb-4">
              {editId ? 'Edit' : 'Tambah'} {activeTab === 'projects' ? 'Project' : 'Sertifikat'}
            </h3>

            <form onSubmit={handleSave} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-mono text-gray-500 mb-1 block">Judul</label>
                <input 
                  type="text" 
                  required
                  placeholder="Masukkan judul"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#E88D4D]"
                />
              </div>

              {activeTab === 'projects' && (
                <div>
                  <label className="text-xs font-mono text-gray-500 mb-1 block">URL Link Website (href)</label>
                  <input 
                    type="url" 
                    placeholder="https://contoh-website.com"
                    value={href}
                    onChange={(e) => setHref(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#E88D4D] font-mono text-xs"
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-mono text-gray-500 mb-1 block">Upload Gambar</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs outline-none file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-[#E88D4D]"
                />
              </div>

              {imagePreview && (
                <div className="w-full h-32 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 relative">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-[#E88D4D] text-white hover:bg-[#d67b3b]"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}