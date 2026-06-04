import { useState } from "react";
import "../styles/Hero.css";

function Hero() {
  const [hovered, setHovered] = useState(false);
  const [borderVisible, setBorderVisible] = useState(true);

  const handleMouseEnter = () => {
    setHovered(true);
    setBorderVisible(false); // border disparaît
    setTimeout(() => {
      setBorderVisible(true); // border réapparaît en rouge après 300ms
    }, 300);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setBorderVisible(false); // border disparaît
    setTimeout(() => {
      setBorderVisible(true); // border réapparaît en blanc après 300ms
    }, 300);
  };

  return (
    <section className="hero"
      style={{
        backgroundColor: 'var(--noir)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        gap: '40px',
      }}
    >

     

      <img
        src="/images/logo-makala.png"
        alt="Makala"
        style={{ 
          width: '654px',
        }}
      />
      <a
      
       href="https://www.fnac.com/a22443506/Makala-YAMOTO-CD-album"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          color: hovered ? 'var(--rouge)' : 'var(--blanc)',
          backgroundColor: 'transparent',
          border: borderVisible
            ? hovered
              ? '2px solid var(--rouge)'
              : '2px solid var(--blanc)'
            : '2px solid transparent', // border invisible pendant la transition
          padding: '14px 40px',
          textDecoration: 'none',
          fontSize: '24px',
          fontFamily: 'var(--font-titre)',
          fontWeight: '400',
          borderRadius: '50px',
          letterSpacing: '1px',
          transition: 'color 0.2s ease, border-color 0.2s ease',
        }}
      >
        {"Achetez l'album"}
      </a>

    </section>
  );
}

export default Hero;