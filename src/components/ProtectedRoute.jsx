// Composant qui protège les pages privées
// Si l'utilisateur n'est pas connecté → redirige vers /login
// Si connecté → il accède à la page

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  // null = on sait pas encore si connecté ou pas
  // false = pas connecté
  // true = connecté
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    // Firebase vérifie automatiquement si quelqu'un est connecté
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user); // !! transforme user en true ou false
    });
    return () => unsub(); // on arrête d'écouter quand le composant disparait
  }, []);

  // En attendant la réponse de Firebase → on affiche rien
  if (isAuth === null) return null;

  // Si pas connecté → redirige automatiquement vers /login
  if (!isAuth) return <Navigate to="/login" />;

  // Si connecté → affiche la page demandée (ici Admin)
  return children;
}

export default ProtectedRoute;