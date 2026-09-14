"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category?: string;
  description: string;
  created_at: string;
}

const API_URL = "http://localhost:5000";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/projects`);
      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        const reversedData = [...data.data].reverse();
        const formattedProjects = reversedData.map((proj: Project) => ({
          ...proj,
          category: "kategorinya ikan",
        }));
        setProjects(formattedProjects);
      }
    } catch {
      setError("Tidak bisa terhubung ke server backend.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Memuat semua project...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <div className="alert alert-error">{error}</div>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="section">
        <h2 className="section-title">Semua Project Database</h2>
        
        {projects.length === 0 ? (
          <div className="empty-state">
            <p>Belum ada project yang tersedia di database.</p>
          </div>
        ) : (
          <div className="project-grid">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} style={{ textDecoration: "none" }}>
                <div className="project-card">
                  <h3>{project.title}</h3>
                  
                  {/* Badge Kategori */}
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span 
                      style={{
                        display: "inline-block",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        padding: "0.2rem 0.6rem",
                        background: "rgba(56, 189, 248, 0.15)",
                        color: "var(--accent)",
                        borderRadius: "6px"
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p>{project.description ? project.description.substring(0, 100) + "..." : "Tidak ada deskripsi."}</p>
                  <div className="card-footer">
                    <span>{new Date(project.created_at).toLocaleDateString("id-ID")}</span>
                    <span className="view-detail">Detail →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}