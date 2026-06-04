import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [hovered, setHovered] = useState(null);

  const linkStyle = (id) => ({
    color: hovered === id ? 'var(--rouge)' : 'var(--blanc)',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'var(--font-nav)',
    letterSpacing: '1px',
    transition: 'color 0.3s',
  });

  return (
    <nav className="navbar" style={{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(5px)',
      borderRadius: '50px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '80px',
      height: '80px',
      width: '584px',
      position: 'fixed',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 999,
    }}>

 <a href="#album"
        style={linkStyle('album')}
        onMouseEnter={() => setHovered('album')}
        onMouseLeave={() => setHovered(null)}
      >
        Album
      </a> 

     <a href="#makala"
        style={linkStyle('makala')}
        onMouseEnter={() => setHovered('makala')}
        onMouseLeave={() => setHovered(null)}
      >
        Makala
      </a>
      <a href="#tournee"
        style={linkStyle('tournee')}
        onMouseEnter={() => setHovered('tournee')}
        onMouseLeave={() => setHovered(null)}
      >
        Tournée
      </a>

      

     

    </nav>
  );
}

export default Navbar;