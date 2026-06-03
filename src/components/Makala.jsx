// Section MAKALA — biographie de l'artiste
// Photo de fond noir/blanc + titre + texte à gauche
import "../styles/Makala.css";

function Makala() {
  return (
    <section className="makala" 
      id="makala"
      style={{
        width: '100%',
        minHeight: '900px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--noir)',
        marginTop: '-110px',

      }}
    >

      {/* Photo de fond Makala noir/blanc */}
      <img
        src="/images/makala_bg.png"
        alt="Makala"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: '60%',
          objectFit: 'cover',
          objectPosition: 'center',
         
        }}
      />

      {/* Contenu texte à gauche */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        paddingLeft: '40px',
        paddingTop: '80px',
        maxWidth: '737px',
      }}>

        {/* Titre MAKALA */}
        <h1 style={{
          fontFamily: 'var(--font-anton)',
          fontSize: '128px',
          fontWeight: '400',
          color: 'var(--blanc)',
          lineHeight: '100%',
          marginBottom: '60px',
          width: '394px',
        }}>
          MAKALA
        </h1>

        {/* Sous titre L'ARTISTE */}
        <p style={{
          fontFamily: 'var(--font-nav)',
          fontSize: '24px',
          fontWeight: '700',
          color: 'var(--blanc)',
          marginBottom: '20px',
          letterSpacing: '0%',
          textAlign: 'left',

        }}>
          {"L'ARTISTE"}
        </p>

        {/* Paragraphe 1 */}
        <p style={{
          fontFamily: 'var(--font-nav)',
          fontSize: '24px',
          fontWeight: '400',
          color: 'var(--blanc)',
          lineHeight: '140%',
          marginBottom: '24px',
          width: '737px',
          textAlign: 'left',

        }}>
          {"Figure incontournable du rap suisse francophone, Makala s'est imposé comme l'une des voix les plus singulières de sa génération. Entre introspection, ambition et authenticité, il développe depuis plusieurs années un univers artistique cohérent où la musique, l'image et le storytelling ne font qu'un."}
        </p>

        {/* Paragraphe 2 */}
        <p style={{
          fontFamily: 'var(--font-nav)',
          fontSize: '24px',
          fontWeight: '400',
          color: 'var(--blanc)',
          lineHeight: '140%',
          marginBottom: '24px',
          width: '737px',
          textAlign: 'left',

        }}>
          {"Reconnu pour son indépendance créative et sa direction artistique exigeante, Makala construit des projets à forte identité visuelle, mêlant esthétique underground, atmosphères cinématographiques et écriture personnelle."}
        </p>

        {/* Paragraphe 3 */}
        <p style={{
          fontFamily: 'var(--font-nav)',
          fontSize: '24px',
          fontWeight: '400',
          color: 'var(--blanc)',
          lineHeight: '140%',
          width: '737px',
          textAlign: 'left',

        }}>
          {"Avec YAMOTO, il poursuit cette démarche en proposant une œuvre intime et puissante, portée par une vision artistique affirmée et une volonté constante de repousser les frontières de son univers."}
        </p>

      </div>

    </section>
  );
}

export default Makala;