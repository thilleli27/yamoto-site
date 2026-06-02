function Tracklist() {
  return (
    <section
      id="album"
      style={{
        width: '100%',
        height: '861px',
        position: 'relative',
        overflow: 'hidden',
         marginTop: '-80px', 
      }}
    >

      {/* Image de fond */}
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

      {/* Titre TRACKLIST par dessus l'image */}
      <h1
        style={{
          position: 'absolute',
          top: '150px',
          left: '40px',
          fontFamily: 'var(--font-anton)',
          fontSize: '128px',
          fontWeight: '400',
          color: 'var(--blanc)',
          lineHeight: '100%',
          width: '485px',
          zIndex: 1,
        }}
      >
        TRACKLIST
      </h1>

    </section>
  );
}

export default Tracklist;