"use client";
import { useState } from "react";

export default function ProjectsSection({ projectsRef, projectsVisible, fadeDelay, ProjectModal, PROJECT_CATEGORIES }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <section
      id="projects"
      ref={projectsRef}
      className="card"
      style={{
        marginBottom: '2rem',
        opacity: projectsVisible ? 1 : 0,
        transform: projectsVisible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s`,
      }}
      aria-label="Projects"
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Featured Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {PROJECT_CATEGORIES.map((category: any) => (
          <div key={category.label}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span style={{
                display: 'inline-block',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#fff',
                background: category.color,
                borderRadius: 8,
                padding: '0.3rem 1.1rem',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
              }}>{category.label}</span>
              <span style={{ color: '#64748b', fontWeight: 500, fontSize: 15 }}>{category.projects.length} project{category.projects.length > 1 ? 's' : ''}</span>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1.5rem',
              overflowX: 'auto',
              paddingBottom: 8,
              scrollbarWidth: 'thin',
              WebkitOverflowScrolling: 'touch',
            }}>
              {category.projects.map((project: any, idx: number) => (
                <button
                  key={project.title}
                  onClick={() => { setSelectedProject(project); setModalOpen(true); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    minWidth: 260,
                    maxWidth: 320,
                    flex: '0 0 260px',
                  }}
                  aria-label={`Preview project: ${project.title}`}
                >
                  <div
                    className="card"
                    style={{
                      boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
                      transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), border-color 0.25s',
                      border: '2px solid transparent',
                      willChange: 'transform',
                      minHeight: 180,
                      background: '#f8fafc',
                      color: '#1e293b',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px) scale(1.03)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 32px 0 rgba(37,99,235,0.10)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = category.color;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = '';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px 0 rgba(0,0,0,0.04)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt="" 
                      style={{ 
                        width: 220, 
                        height: 160, 
                        borderRadius: 12, 
                        objectFit: 'cover', 
                        marginBottom: 12, 
                        background: '#e5e7eb',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }} 
                    />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.3rem 0', color: category.color, textAlign: 'center' }}>{project.title}</h3>
                    <p style={{ color: '#334155', fontSize: '0.98rem', marginBottom: 8, textAlign: 'center' }}>{project.description}</p>
                    <span style={{ position: 'absolute', top: 16, right: 16, fontSize: 13, color: category.color, fontWeight: 600, background: '#fff', borderRadius: 6, padding: '2px 10px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)' }}>{category.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Modal Preview */}
      {modalOpen && selectedProject && (
        <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} project={selectedProject} />
      )}
    </section>
  );
}
