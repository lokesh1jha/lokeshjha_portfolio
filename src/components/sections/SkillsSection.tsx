"use client";

export default function SkillsSection({ skillsRef, skillsVisible, fadeDelay, SKILLS }: any) {
  return (
    <section
      id="skills"
      ref={skillsRef}
      className="card"
      style={{
        marginBottom: '2rem',
        opacity: skillsVisible ? 1 : 0,
        transform: skillsVisible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s`,
      }}
      aria-label="Skills"
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Skills</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.7rem' }}>
        {SKILLS.map((group: any) => (
          <div key={group.category}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{
                display: 'inline-block',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#fff',
                background: group.color,
                borderRadius: 8,
                padding: '0.2rem 1rem',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
              }}>{group.category}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
              {group.items.map((skill: string) => (
                <span
                  key={skill}
                  style={{
                    display: 'inline-block',
                    background: '#f3f6fa',
                    color: '#1e293b',
                    borderRadius: 6,
                    padding: '0.35rem 0.9rem',
                    fontWeight: 500,
                    fontSize: 15,
                    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
                    border: '1px solid #e5e7eb',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
