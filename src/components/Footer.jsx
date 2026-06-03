// Footer du site
// Date + YAMOTO en outline + liens réseaux sociaux + mentions légales

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--noir)',
        padding: '80px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        minHeight: '700px',
      }}
    >

      {/* Date */}
      <p style={{
        fontFamily: 'var(--font-nav)',
        fontSize: '64px',
        fontWeight: '400',
        color: 'transparent',
        WebkitTextStroke: '1px #FFFFFF', // texte en outline
        letterSpacing: '0%',
        marginBottom: '0px',
      }}>
        10.07.2026
      </p>

      {/* YAMOTO en outline */}
      <h1 style={{
        fontFamily: 'var(--font-anton)',
        fontSize: '320px',
        fontWeight: '1000',
        color: 'transparent',
        WebkitTextStroke: '4px #C60000', // texte en outline
        lineHeight: '100%',
        letterSpacing: '0%',
        width: '1393px',
        textAlign: 'center',
      }}>
        YAMOTO
      </h1>

      {/* Liens réseaux sociaux + mentions légales */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 60px',
        marginTop: '80px',
        alignItems: 'center',
      }}>

        {/* Liens réseaux sociaux */}
        <div style={{
          display: 'flex',
          gap: '40px',
        }}>

        
        </div>

        {/* Mentions légales */}
        <div style={{
          display: 'flex',
          gap: '40px',
        }}>

        </div>

      </div>

    </footer>
  );
}

export default Footer;