// Section YAMOTO — présentation de l'album
// Contient le titre, les paragraphes de description et la pochette
import "../styles/Yamoto.css";

function Yamoto() {
  return (
    <section className="yamoto"
      id="yamoto"
      style={{
        backgroundColor: 'var(--noir)',
        minHeight: '1093px',
        display: 'flex',
        alignItems: 'center',
        gap: '80px',
      }}
    >

      {/* PARTIE GAUCHE — titre + texte */}
      <div  className="yamoto-text" style={{
        paddingLeft: '43px',
      }}>

        {/* Titre YAMOTO */}
        <h1 style={{
          fontFamily: 'var(--font-anton)',
          fontSize: '128px',
          fontWeight: '400',
          color: 'var(--blanc)',
          lineHeight: '100%',
          marginBottom: '60px',
          width: '394px',
        }}>
          YAMATO
        </h1>

        {/* Bloc de paragraphes */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginLeft:' 1px'
        }}>

          {/* Paragraphe 1 */}
          <p style={{
            fontFamily: 'var(--font-nav)',
            fontSize: '24px',
            fontWeight: '400',
            color: 'var(--blanc)',
            lineHeight: '140%',
            textAlign: 'left',

          }}>
            {"YAMOTO est un album qui explore les contrastes entre l'ombre et la lumière, la solitude et l'ambition, la fragilité et la force."}
          </p>

          {/* Paragraphe 2 */}
          <p style={{
            fontFamily: 'var(--font-nav)',
            fontSize: '24px',
            fontWeight: '400',
            color: 'var(--blanc)',
            lineHeight: '140%',
            textAlign: 'left',

          }}>
            {"À travers des productions sombres et immersives, Makala livre un projet introspectif où chaque morceau raconte une étape de son parcours personnel."}
          </p>

          {/* Paragraphe 3 */}
          <p style={{
            fontFamily: 'var(--font-nav)',
            fontSize: '24px',
            fontWeight: '400',
            color: 'var(--blanc)',
            lineHeight: '140%',
            textAlign: 'left',

          }}>
            {"Porté par une direction artistique brute et cinématographique, YAMOTO incarne cette flamme intérieure qui pousse à avancer malgré les obstacles."}
          </p>

          {/* Paragraphe 4 */}
          <p style={{
            fontFamily: 'var(--font-nav)',
            fontSize: '24px',
            fontWeight: '400',
            color: 'var(--blanc)',
            lineHeight: '140%',
            textAlign: 'left',

          }}>
            {"Entre mélancolie, détermination et quête d'identité, l'album dessine un univers profond, sincère et résolument moderne."}
          </p>

        </div>
      </div>

      {/* PARTIE DROITE — pochette album */}
      <div  className="yamoto-image" style={{
        width: '1097px',
        height: '743px',
        flexShrink: 0,
      }}>
        <img
          src="/images/pochette_yamoto.png"
          alt="Pochette YAMOTO"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

    </section>
  );
}

export default Yamoto;