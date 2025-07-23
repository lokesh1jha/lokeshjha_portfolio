"use client";

export default function ContactSection({ contactRef, contactVisible, fadeDelay, CONTACTS }: any) {
  return (
    <section
      id="contact"
      ref={contactRef}
      className="card"
      style={{
        opacity: contactVisible ? 1 : 0,
        transform: contactVisible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s`,
      }}
      aria-label="Contact"
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2.2rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {CONTACTS.map((link: any) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: '1.08rem',
              color: link.color,
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: 8,
              padding: '0.5rem 1.1rem',
              background: '#f3f6fa',
              border: `1.5px solid ${link.color}22`,
              boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
              transition: 'background 0.2s, color 0.2s',
              minWidth: 120,
              justifyContent: 'center',
            }}
            aria-label={link.label}
            onMouseEnter={e => (e.currentTarget.style.background = link.color + '11')}
            onMouseLeave={e => (e.currentTarget.style.background = '#f3f6fa')}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
