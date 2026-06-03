import { useState, useEffect } from "react";
import "../styles/Tracklist.css";

function Tracklist() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="tracklist"
      id="album"
      style={{
        width: '100%',
        height: isMobile ? '400px' : '861px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#C60000',
        marginTop: '-80px',
      }}
    >
      <img
        src="/images/tracklist_bg.png"
        alt="Tracklist YAMOTO"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'right',
        }}
      />

      <h1
        style={{
          position: 'absolute',
          top: isMobile ? '10px' : '100px',
          left: '20px',
          fontFamily: 'var(--font-anton)',
          fontSize: isMobile ? '40px' : '128px',
          fontWeight: '400',
          color: 'var(--blanc)',
          lineHeight: '100%',
          width: 'auto',
          zIndex: 1,
          whiteSpace: 'nowrap',
                    marginBottom: '60px',

        }}
      >
        TRACKLIST
      </h1>

    </section>
  );
}

export default Tracklist;