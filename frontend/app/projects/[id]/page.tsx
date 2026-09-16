"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category?: string;
  description: string;
  created_at: string;
}

const API_URL = "http://localhost:3000";

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params?.id) {
      fetchProject(params.id as string);
    }
  }, [params?.id]);

  const fetchProject = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`);
      const data = await response.json();

      if (data.success && data.data) {
        setProject({
          ...data.data,
          category: "kategorinya ikan"
        });
      } else if (!data.success && data.message) {
        setError(data.message);
      } else {
        setProject({
          ...data,
          category: "kategorinya ikan"
        });
      }
    } catch {
      setError("Tidak bisa terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <main className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Memuat detail project...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <Link href="/projects" className="back-link">
          ← Kembali ke daftar project
        </Link>
        <div className="alert alert-error">{error}</div>
      </main>
    );
  }

  return (
    <main className="container">
      <Link href="/projects" className="back-link">
        ← Kembali ke daftar project
      </Link>
      {project && (
        <article className="project-detail">
          <h1>{project.title}</h1>
          <div style={{ marginBottom: "1rem" }}>
            <span className="category-badge">
              {project.category || "kategorinya ikan"}
            </span>
          </div>

          <div className="meta">Dibuat pada: {formatDate(project.created_at)}</div>
          <div className="description">
            {project.description || "Tidak ada deskripsi untuk project ini."}
          </div>
        </article>
      )}
    </main>
  );
}