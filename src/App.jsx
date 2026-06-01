// Fichier principal de l'application
// Gère le routing entre les différentes pages

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Page principale du site (one page) */}
        <Route path="/" element={<div>Site en construction</div>} />

        {/* Page de connexion admin */}
        <Route path="/login" element={<Login />} />

        {/* Page admin — protégée ! */}
        {/* Si pas connecté → redirige vers /login automatiquement */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;