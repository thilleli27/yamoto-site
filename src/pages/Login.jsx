// Page de connexion pour l'admin
// Seul l'admin peut se connecter pour accéder au back-office

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--noir)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      {/* Logo signature Makala */}
      <img
        src="/images/logo-makala.png"
        alt="Makala"
        style={{ width: '300px', marginBottom: '40px' }}
      />

      {/* Titre */}
      <h1 style={{
        fontFamily: 'var(--font-anton)',
        fontSize: '48px',
        color: 'var(--blanc)',
        marginBottom: '40px',
        letterSpacing: '2px',
      }}>
        ADMIN
      </h1>

      {/* Formulaire */}
      <form
        onSubmit={handleLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '400px',
        }}
      >

        {/* Champ email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid var(--blanc)',
            color: 'var(--blanc)',
            padding: '14px 20px',
            fontSize: '16px',
            fontFamily: 'var(--font-nav)',
            outline: 'none',
            borderRadius: '4px',
          }}
        />

        {/* Champ mot de passe */}
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid var(--blanc)',
            color: 'var(--blanc)',
            padding: '14px 20px',
            fontSize: '16px',
            fontFamily: 'var(--font-nav)',
            outline: 'none',
            borderRadius: '4px',
          }}
        />

        {/* Message d'erreur */}
        {error && (
          <p style={{
            color: 'var(--rouge)',
            fontSize: '14px',
            fontFamily: 'var(--font-nav)',
            textAlign: 'center',
          }}>
            {error}
          </p>
        )}

        {/* Bouton connexion */}
        <button
          type="submit"
          style={{
            backgroundColor: 'var(--rouge)',
            color: 'var(--blanc)',
            border: 'none',
            padding: '14px 20px',
            fontSize: '16px',
            fontFamily: 'var(--font-nav)',
            fontWeight: '700',
            cursor: 'pointer',
            borderRadius: '4px',
            letterSpacing: '2px',
            marginTop: '8px',
          }}
        >
          SE CONNECTER
        </button>

      </form>

    </div>
  );
}

export default Login;