"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work-experience" },
  { label: "Contact", href: "#contact" },
];

export default function ClientLayoutShell({ children }: { children: React.ReactNode }) {
  // Scroll progress bar
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScroll((scrolled / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark mode toggle
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Mobile nav
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scroll}%`,
        height: '4px',
        background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
        zIndex: 100,
        transition: 'width 0.2s',
      }} aria-hidden="true" />
      {/* Header/Nav */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo/Initials */}
          <a href="#hero" className="navbar-logo" aria-label="Lokesh Jha Home">
            <span className="navbar-logo-circle">LJ</span>
            Lokesh Jha
          </a>
          {/* Desktop Nav */}
          <ul className="navbar-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDark((d) => !d)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  color: 'var(--color-primary)',
                  marginLeft: 8,
                }}
              >
                {dark ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
          {/* Mobile Nav Toggle */}
          <button
            aria-label="Open navigation menu"
            onClick={() => setNavOpen((v) => !v)}
            className="navbar-toggle"
          >
            ☰
          </button>
        </div>
        {/* Mobile Nav Drawer */}
        <div className={navOpen ? "navbar-mobile-open" : "navbar-mobile"}>
          {navOpen && (
            <>
              <button
                aria-label="Close navigation menu"
                onClick={() => setNavOpen(false)}
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 32,
                  background: 'none',
                  border: 'none',
                  fontSize: 36,
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >×</button>
              <ul className="navbar-mobile-list">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setNavOpen(false)}
                      className="navbar-mobile-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    aria-label="Toggle dark mode"
                    onClick={() => setDark((d) => !d)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '2rem',
                      color: '#fff',
                      marginLeft: 8,
                    }}
                  >
                    {dark ? '🌙' : '☀️'}
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1rem' }}>{children}</main>
    </>
  );
} 