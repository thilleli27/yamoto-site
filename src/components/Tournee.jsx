// Section TOURNÉE
// Affiche les 3 premières dates depuis Firebase
// Bouton "Voir toutes les dates" scrolle vers toutes les dates

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Tournee() {
  // Les 3 premières dates depuis Firebase
  const [dates, setDates] = useState([]);
  // Afficher toutes les dates ou pas
  const [showAll, setShowAll] = useState(false);

  // Récupère les dates depuis Firebase au chargement
  useEffect(() => {
    const fetchDates = async () => {
      const snapshot = await getDocs(collection(db, "dates"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDates(data);
    };
    fetchDates();
  }, []);


const firstThree = dates;
const restDates = [];

  return (
    <section id="tournee" style={{
      backgroundColor: 'var(--noir)',
      padding: '80px 0',
    }}>

      {/* PARTIE PRINCIPALE — carré rouge + 3 dates */}
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
      }}>

        {/* Carré rouge TOURNÉE */}
        <div style={{
          width: '553px',
          minHeight: '453px',
          backgroundColor: 'var(--rouge)',
          padding: '140px 74px 60px 74px', // plus de padding en haut
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>

          {/* Titre TOURNÉE */}
          <h1 style={{
            fontFamily: 'var(--font-anton)',
            fontSize: '128px',
            fontWeight: '400',
            color: 'var(--noir)',
            lineHeight: '100%',
            width: '404px',
          }}>
            TOURNÉE
          </h1>

          

        </div>

        {/* 3 premières dates */}
        <div style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
        }}>
          {firstThree.map((concert, index) => (
            <div key={concert.id} style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}>

              {/* Trait rouge vertical entre les dates */}
              {index > 0 && (
                <div style={{
                  width: '4px',
                  height: '353px',
                  backgroundColor: 'var(--rouge)',
                  flexShrink: 0,
                }} />
              )}

              {/* Infos du concert */}
              <div style={{
                padding: '0 40px',
                flex: 1,
              }}>

                {/* Date en rouge */}
                <p style={{
                  fontFamily: 'var(--font-nav)',
                  fontSize: '36px',
                  fontWeight: '900',
                  color: 'var(--rouge)',
                  marginBottom: '16px',
                }}>
                  {concert.date}
                </p>

                {/* Ville en blanc gras */}
                <p style={{
                  fontFamily: 'var(--font-nav)',
                  fontSize: '40px',
                  fontWeight: '900',
                  color: 'var(--blanc)',
                  marginBottom: '12px',
                }}>
                  {concert.ville.toUpperCase()}
                </p>

                {/* Lieu en blanc léger */}
                <p style={{
                  fontFamily: 'var(--font-nav)',
                  fontSize: '32px',
                  fontWeight: '300',
                  color: 'var(--blanc)',
                }}>
                  {concert.lieu}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOUTES LES DATES — visible seulement si showAll est true */}
      {showAll && restDates.length > 0 && (
        <div id="toutes-les-dates" style={{
          marginTop: '60px',
          paddingLeft: '74px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-anton)',
            fontSize: '48px',
            color: 'var(--blanc)',
            marginBottom: '40px',
          }}>
            Toutes les dates
          </h2>

          {restDates.map((concert) => (
            <div key={concert.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              padding: '20px 0',
              borderBottom: '1px solid #333',
            }}>
              <p style={{
                fontFamily: 'var(--font-nav)',
                fontSize: '24px',
                fontWeight: '900',
                color: 'var(--rouge)',
                width: '150px',
              }}>
                {concert.date}
              </p>
              <p style={{
                fontFamily: 'var(--font-nav)',
                fontSize: '24px',
                fontWeight: '900',
                color: 'var(--blanc)',
                width: '200px',
              }}>
                {concert.ville.toUpperCase()}
              </p>
              <p style={{
                fontFamily: 'var(--font-nav)',
                fontSize: '24px',
                fontWeight: '300',
                color: 'var(--blanc)',
              }}>
                {concert.lieu}
              </p>
              {concert.soldout && (
                <span style={{
                  backgroundColor: 'var(--rouge)',
                  color: 'var(--blanc)',
                  padding: '4px 12px',
                  fontSize: '14px',
                  borderRadius: '4px',
                }}>
                  SOLD OUT
                </span>
              )}
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default Tournee;