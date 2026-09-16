"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category?: string;
  description: string;
}

export default function HomePage() {
  const [latestProjects, setLatestProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("http://localhost:3000/projects");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const sorted = [...data.data].reverse();
          
          const targetOrder: Project[] = [];
          if (sorted.length > 1) targetOrder.push(sorted[1]);
          if (sorted.length > 0) targetOrder.push(sorted[0]);
          if (sorted.length > 2) targetOrder.push(sorted[2]);

          const projectsWithCategory = targetOrder.map((proj: any) => ({
            ...proj,
            category: "kategorinya ikan"
          }));
          setLatestProjects(projectsWithCategory);
        }
      } catch (err) {
        console.error("Gagal memuat proyek terbaru:", err);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchLatest();
  }, []);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "" &&
    isValidEmail(formData.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatusMsg("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMsg("error");
      }
    } catch {
      setStatusMsg("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <section className="hero">
        <h1>Portofolio Saya</h1>
        <p>Selamat datang di website portofolio Full-Stack Web Development!</p>
      </section>

      <section className="section">
        <h2 className="section-title">Proyek Terbaru</h2>

        {loadingProjects ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Memuat proyek terbaru...</p>
          </div>
        ) : latestProjects.length === 0 ? (
          <div className="empty-state">
            <p>Belum ada proyek terbaru.</p>
          </div>
        ) : (
          <div className="project-grid">
            {latestProjects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>

                <span className={`category-badge ${!project.category ? "uncategorized" : ""}`}>
                  {project.category || "Uncategorized"}
                </span>

                <p>{project.description}</p>

                <div className="card-footer">
                  <Link href={`/projects/${project.id}`} className="view-detail">
                    Lihat Detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="section" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 className="section-title" id="contact">Hubungi Saya</h2>

        <div className="contact-form">
          {statusMsg === "success" && (
            <div className="alert alert-success">✅ Pesan berhasil dikirim!</div>
          )}
          {statusMsg === "error" && (
            <div className="alert alert-error">❌ Gagal mengirim pesan. Coba lagi!</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nama</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className={formData.email && !isValidEmail(formData.email) ? "input-error" : ""}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nama@gmail.com"
              />
            </div>

            <div className="form-group">
              <label>Pesan</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <button type="submit" disabled={!isFormValid || loading} className="btn-submit">
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}