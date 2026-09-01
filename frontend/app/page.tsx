"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  kategori?: string;
  description: string;
  image: string;
  created_at: string;
}

const API_URL = "http://localhost:3000";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [alert, setAlert] = useState<{
    type: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/projects`);
      const data = await response.json();

      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error("gagal mengambil project:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    formData.email
  );

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    isEmailValid &&
    formData.message.trim() !== "";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSending(true);
    setAlert(null);

    setTimeout(() => {
      setAlert({
        type: "success",
        text: "Pesan berhasil dikirim!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSending(false);
    }, 500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      "id-ID",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>
          selamat datang di portofolio saya
        </h1>

        <p>
          saya seorang developer yang berfokus pada
          pembuatan aplikasi web yang user-friendly
          dan efisien.
        </p>
      </section>


      {/* PROJECT TERBARU */}
      <section className="section">
        <h1 className="section-title">
          Project terbaru
        </h1>
        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>membuat proyek...</p>
          </div>

        ) : projects.length === 0 ? (

          <div className="empty-state">
            <p>Belum ada project.</p>
          </div>

        ) : (

          <div className="project-grid">
            {projects
              .slice(0, 3)
              .map((project) => (

                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  style={{
                    textDecoration: "none",
                  }}
                >

                <div className="project-card">
                  <h3>{project.title}</h3>

                  <small className="project-category">
                    {project.kategori || "Lorem Ipsum"}
                  </small>

                  <p>
                    {project.description
                      ? project.description.substring(0, 100) + "..."
                      : "Tidak ada deskripsi."}
                  </p>

                  <div className="card-footer">
                    <span>
                      {formatDate(project.created_at)}
                    </span>

                    <span className="view-detail">
                      Lihat Detail →
                    </span>
                  </div>
                </div>
                </Link>
              ))}
          </div>
        )}

        {projects.length > 3 && (
          <div
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
            }}
          >
            <Link
              href="/projects"
              className="back-link"
            >
              Lihat semua project
            </Link>
          </div>
        )}
      </section>

      <section
        className="section"
        id="contact"
      >

        <h2 className="section-title">
          Kirim Pesan
        </h2>

        {alert && (
          <div
            className={`alert alert-${alert.type}`}
          >
            {alert.text}
          </div>
        )}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label htmlFor="name">
              Nama
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama kamu"
              required
            />

          </div>


          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan email kamu"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="message">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Masukkan pesan kamu"
              required
            ></textarea>
          </div>


          <button
            type="submit"
            className="btn-submit"
            disabled={!isFormValid || sending}
          >
            {sending
              ? "Mengirim..."
              : "Kirim Pesan"}

          </button>
        </form>
      </section>
    </div>
  );
}