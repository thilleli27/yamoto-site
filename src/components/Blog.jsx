// Section ACTU — actualités et vidéo
// Titre + texte + vidéo YouTube intégrée

function Blog() {
  return (
    <section
      id="actu"
      style={{
        backgroundColor: 'var(--noir)',
        padding: '90px 40px 200px 40px', // plus de padding en bas
      }}
    >

      {/* Titre ACTU */}
      <h1 style={{
        fontFamily: 'var(--font-anton)',
        fontSize: '128px',
        fontWeight: '400',
        color: 'var(--blanc)',
        lineHeight: '100%',
        marginBottom: '40px',
        width: '235px',
      }}>
        ACTU
      </h1>

      {/* Texte actu */}
      <p style={{
        fontFamily: 'var(--font-nav)',
        fontSize: '24px',
        fontWeight: '400',
        color: 'var(--blanc)',
        lineHeight: '150%',
        marginBottom: '60px',
        maxWidth: '1840px',
        textAlign: 'left',
      }}>
        {"Depuis la sortie de YAMOTO, Makala continue de développer l'univers de son nouvel album à travers une série d'événements et de contenus exclusifs. Une tournée a d'ores et déjà été annoncée avec plusieurs dates prévues en France et en Suisse, permettant au public de découvrir le projet sur scène dans une expérience pensée comme le prolongement de l'album. Point d'orgue de cette actualité, une release party exceptionnelle se tiendra le 18.07.2026 au Bataclan à Paris, réunissant fans et collaborateurs autour de cette nouvelle ère artistique. Parallèlement, plusieurs clips officiels de YAMOTO ont été dévoilés sur YouTube. Véritables extensions visuelles de l'album, ils permettent d'explorer son esthétique unique, entre élégance nocturne, introspection et influences contemporaines. Découvrez ci-dessous l'un des clips issus du projet et plongez dans l'univers de YAMOTO."}
      </p>

      {/* Vidéo YouTube */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/U-KZow_98Fw"
          title="HOTEL YOTSUYA - MAKALA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Titre de la vidéo */}
        <p style={{
          fontFamily: 'var(--font-anton)',
          fontSize: '32px',
          color: 'var(--blanc)',
          marginTop: '24px',
          textDecoration: 'underline',
          letterSpacing: '2px',
        }}>
          HOTEL YOTSUYA - MAKALA
        </p>

      </div>

    </section>
  );
}

export default Blog;