"use client";

export default function AboutSection({ aboutRef, aboutVisible, fadeDelay }: { aboutRef: any, aboutVisible: boolean, fadeDelay: number }) {
  return (
    <section
      id="about"
      ref={aboutRef}
      className="card"
      style={{
        marginBottom: '2rem',
        opacity: aboutVisible ? 1 : 0,
        transform: aboutVisible ? 'none' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${fadeDelay}s`,
        display: 'flex',
        justifyContent: 'center',
      }}
      aria-label="About"
    >
      <div style={{ fontSize: '1.13rem', color: 'var(--color-text)', maxWidth: 650, textAlign: 'center', marginTop: 12, lineHeight: 1.7 }}>
        <p style={{ textAlign: 'center' }}>Currently, I&apos;m <b>pushing boundaries in both blockchain and AI</b> developing NFT platforms, smart contracts on <b>Solana</b> using <b>Rust</b>, and crafting intelligent systems that process and analyze petabytes of data.</p>
        <p style={{ textAlign: 'center' }}>I thrive on <b>solving complex engineering challenges</b> and bringing <i>innovative solutions</i> to life. Whether it&apos;s designing a <b>fault-tolerant API</b>, building <b>gasless crypto payment systems</b>, or integrating <b>AI into decentralized workflows</b>, I aim to build technology that&apos;s both <b>future-ready</b> and <i>human-centric</i>.</p>
        <p style={{ marginTop: 18, fontWeight: 500, textAlign: 'center' }}>
          <b>
            <button 
              style={{ 
                backgroundColor: 'var(--color-primary)', 
                color: 'white', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                fontFamily: 'inherit',
                display: 'inline-block',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                margin: '0 4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-dark, #0056b3)';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let&apos;s connect
            </button>
            if you&apos;re building something that matters.
          </b>
        </p>
      </div>
    </section>
  );
}
