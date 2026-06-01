// Page de connexion pour l'admin
// Seul l'admin peut se connecter pour accéder au back-office

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  // Stocke ce que l'admin tape dans les champs
  const [email, setEmail] = useState("");       // champ email
  const [password, setPassword] = useState(""); // champ mot de passe
  const [error, setError] = useState("");       // message d'erreur si login raté

  // Permet de rediriger vers une autre page après connexion
  const navigate = useNavigate();

  // Fonction appelée quand l'admin clique sur "Se connecter"
  const handleLogin = async (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    try {
      // On envoie email + mot de passe à Firebase pour vérification
      await signInWithEmailAndPassword(auth, email, password);

      // Si connexion réussie → on redirige vers la page admin
      navigate("/admin");

    } catch (err) {
      // Si email ou mot de passe incorrect → on affiche un message d'erreur
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div>
      <h1>Connexion Admin</h1>

      {/* Formulaire de connexion */}
      <form onSubmit={handleLogin}>

        {/* Champ email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Champ mot de passe */}
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se connecter</button>

        {/* Affiche le message d'erreur seulement s'il y en a un */}
        {error && <p>{error}</p>}

      </form>
    </div>
  );
}

export default Login;