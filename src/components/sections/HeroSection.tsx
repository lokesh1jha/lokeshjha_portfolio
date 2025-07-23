"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        marginBottom: '2.5rem',
      }}
      aria-label="Hero"
    >
      <Image
        src="/my_pic.jpeg"
        alt="Lokesh Jha portrait"
        width={120}
        height={120}
        style={{ borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        priority
      />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Lokesh Jha</h1>
      <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span role="img" aria-label="rocket">🚀</span> Backend Developer | Blockchain Enthusiast | AI Integrator
      </h2>
      <div style={{ fontSize: '1.13rem', color: 'var(--color-text)', maxWidth: 650, textAlign: 'center', marginTop: 12, lineHeight: 1.7 }}>
        <p><b>I&apos;m a seasoned Backend Developer</b> with over <b>6 years of experience</b> building scalable, high-performance systems using <b>Node.js</b>, <b>TypeScript</b>, and robust databases like <b>PostgreSQL</b> and <b>MySQL</b>. My core strength lies in <b>architecting backend infrastructures</b> that power real-time, data-intensive applications and decentralized platforms.</p>
        <p>Currently, I&apos;m <b>pushing boundaries in both blockchain and AI</b> developing NFT platforms, smart contracts on <b>Solana</b> using <b>Rust</b>, and crafting intelligent systems that process and analyze petabytes of data.</p>
        <p>I thrive on <b>solving complex engineering challenges</b> and bringing <i>innovative solutions</i> to life. Whether it&apos;s designing a <b>fault-tolerant API</b>, building <b>gasless crypto payment systems</b>, or integrating <b>AI into decentralized workflows</b>, I aim to build technology that&apos;s both <b>future-ready</b> and <i>human-centric</i>.</p>
        <p style={{ marginTop: 18, fontWeight: 500 }}><b>Let&apos;s connect if you&apos;re building something that matters.</b></p>
      </div>
    </section>
  );
} 