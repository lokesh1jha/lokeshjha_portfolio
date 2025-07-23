"use client";
import { useRef } from "react";

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
      }}
      aria-label="About"
    >
      {/* Add your about content here, or pass as props if needed */}
    </section>
  );
}
