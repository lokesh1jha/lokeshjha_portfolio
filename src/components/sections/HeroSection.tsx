"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '2rem',
        marginBottom: '2.5rem',
      }}
      aria-label="Hero"
    >
      <div style={{ flexShrink: 0 }}>
        <Image
          src="/lokesh_jha_profile_pic.png"
          alt="Lokesh Jha portrait"
          width={280}
          height={400}
          style={{ borderRadius: '6%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          priority
        />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, color: 'black', alignSelf: 'center' }}>Lokesh Jha</h1>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="rocket">🚀</span> Senior Backend Developer [Blockchain & AI]
        </h2>
        <div style={{ fontSize: '1.13rem', color: 'var(--color-text)', lineHeight: 1.7 }}>
          <p><b>I&apos;m a seasoned Backend Developer</b> with over <b>6 years of experience</b> building scalable, high-performance systems using <b>Node.js</b>, <b>TypeScript</b>, and robust databases like <b>PostgreSQL</b> and <b>MySQL</b>. My core strength lies in <b>architecting backend infrastructures</b> that power real-time, data-intensive applications and decentralized platforms.</p>
        </div>
      </div>
    </section>
  );
} 