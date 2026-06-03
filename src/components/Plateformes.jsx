// Section PLATEFORMES
// Titre + logos Spotify, Deezer, Apple Music, YouTube Music
// Chaque logo est cliquable et mène vers la page de Makala
import "../styles/Plateformes.css";

function Plateformes() {
  return (
    <section className="plateformes" 
      id="plateformes"
      style={{
        backgroundColor: 'var(--noir)',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >

  {/* Titre */}
      <h2 style={{
        fontFamily: 'var(--font-titre)',
        fontSize: '48px',
        fontWeight: '400',
        color: 'var(--blanc)',
        textDecoration: 'underline',
        marginBottom: '60px',
      }}>
        Disponible sur toutes les plateformes
      </h2>
      {/* Logos des plateformes */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '80px',
        flexWrap: 'wrap',
      }}>

        {/* Spotify */}
        <a
          href="https://open.spotify.com/intl-fr/artist/3r7t38zbphQtpfAH12UbRd"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/pngegg-6.png"
            alt="Spotify"
            style={{ width: '450px', height: '130px', objectFit: 'contain' }}
          />
        </a>

        {/* Deezer */}
        <a
          href="https://www.deezer.com/fr/artist/536194"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/DEEZR.PA_BIG.D.png"
            alt="Deezer"
            style={{ width: '267px', height: '76px', objectFit: 'contain' }}
          />
        </a>

        {/* Apple Music */}
        <a
          href="https://music.apple.com/fr/artist/makala/1435966750"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/pngkey.com-music-png-137873.png"
            alt="Apple Music"
            style={{ width: '202px', height: '76px', objectFit: 'contain' }}
          />
        </a>

        {/* YouTube Music */}
        <a 
          href="https://www.youtube.com/channel/UCg20mF_zavsqCjjERZqyyPw"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/Youtube-Music-Logo.png.webp"
            alt="YouTube Music"
            style={{ width: '356px', height: '76px', objectFit: 'contain' }}
          />
        </a>

      </div>

    </section>
  );
}

export default Plateformes;