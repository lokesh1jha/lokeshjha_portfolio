"use client";

export default function ExperienceSection({ workRef, workVisible, fadeDelay, EXPERIENCE }: any) {
  return (
    <section
      id="work-experience"
      ref={workRef}
      className="card"
      style={{
        marginBottom: '2rem',
        opacity: workVisible ? 1 : 0,
        transform: workVisible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s`,
      }}
      aria-label="Work Experience"
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Work Experience</h2>
      <ol style={{ borderLeft: '3px solid var(--color-primary)', margin: 0, padding: 0, listStyle: 'none' }}>
        {EXPERIENCE.map((job: any, idx: number) => (
          <li key={job.company + job.period} style={{ position: 'relative', marginBottom: idx === EXPERIENCE.length - 1 ? 0 : '2.5rem', paddingLeft: 24 }}>
            <span style={{
              position: 'absolute',
              left: -13,
              top: 8,
              width: 16,
              height: 16,
              background: 'var(--color-primary)',
              borderRadius: '50%',
              border: '3px solid #fff',
              boxShadow: '0 0 0 2px var(--color-primary)',
              zIndex: 1,
            }} aria-hidden="true" />
            <div style={{
              background: 'var(--color-card)',
              borderRadius: 12,
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)',
              padding: '1.2rem 1.5rem',
              marginBottom: 0,
              transition: 'background var(--transition)',
              display: 'flex',
              flexDirection: 'row',
              gap: 24,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}>
              {/* Landing page preview (image or iframe) */}
              {job.landingPage ? (
                <div style={{ minWidth: 180, maxWidth: 200, flex: '0 0 150px', marginRight: 11 }}>
                  <a href={job.landingPage} target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)' }}>
                    <img
                      src={`https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(job.landingPage)}`}
                      alt={job.company + ' logo'}
                      style={{ width: '100%', height: 60, objectFit: 'contain', background: '#f3f6fa', marginBottom: 8 }}
                    />
                  </a>
                </div>
              ) : null}
              {/* Description */}
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{job.role}</span>
                  <span style={{ fontSize: 14, color: '#64748b' }}>{job.period}</span>
                </div>
                <div style={{ fontWeight: 500, fontSize: 15 }}>{job.company} <span style={{ color: '#64748b', fontWeight: 400 }}>· {job.location}</span></div>
                <ul style={{ margin: '0.7rem 0 0 1.2rem', padding: 0, color: 'var(--color-text)', fontSize: 15, lineHeight: 1.7 }}>
                  {job.highlights.map((h: string, i: number) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
