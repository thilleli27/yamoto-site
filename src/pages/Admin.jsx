// Page d'administration des dates de tournée
// Accessible uniquement après connexion

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

// On importe les composants React Bootstrap
// Au lieu de faire des <div> et <button> basiques,
// on utilise des composants tout prêts et déjà stylisés
import { Container, Table, Button, Form, Badge, Navbar, Alert } from "react-bootstrap";

// On importe le CSS de Bootstrap obligatoirement
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {

  // Liste des dates récupérées depuis Firebase
  const [dates, setDates] = useState([]);

  // Données du formulaire pour ajouter/modifier une date
  const [form, setForm] = useState({
    date: "",
    ville: "",
    pays: "",
    lieu: "",
    soldout: false,
  });

  // ID de la date qu'on est en train de modifier
  // null = on est en mode "ajouter"
  const [editId, setEditId] = useState(null);

  // Message de succès après ajout/modification/suppression
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // useEffect = s'exécute une seule fois au chargement de la page
  // On récupère les dates depuis Firebase
  useEffect(() => {
    fetchDates();
  }, []);

  // Récupère toutes les dates depuis la collection "dates" dans Firebase
  const fetchDates = async () => {
    const snapshot = await getDocs(collection(db, "dates"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setDates(data);
  };

  // Met à jour le formulaire quand l'admin tape quelque chose
  // Fonctionne pour tous les champs (texte ET checkbox)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // Appelée quand l'admin clique sur "Ajouter" ou "Modifier"
  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    if (editId) {
      // On est en mode modification → on met à jour la date existante dans Firebase
      await updateDoc(doc(db, "dates", editId), form);
      setMessage("Date modifiée avec succès !");
      setEditId(null); // on repasse en mode "ajouter"
    } else {
      // On est en mode ajout → on crée une nouvelle date dans Firebase
      await addDoc(collection(db, "dates"), form);
      setMessage("Date ajoutée avec succès !");
    }

    // On vide le formulaire
    setForm({ date: "", ville: "", pays: "", lieu: "", soldout: false });

    // On recharge la liste des dates
    fetchDates();

    // On efface le message après 3 secondes
    setTimeout(() => setMessage(""), 3000);
  };

  // Quand l'admin clique sur ✏️ 
  // On remplit le formulaire avec les données de la date à modifier
  const handleEdit = (concert) => {
    setForm({
      date: concert.date,
      ville: concert.ville,
      pays: concert.pays,
      lieu: concert.lieu,
      soldout: concert.soldout,
    });
    setEditId(concert.id); // on passe en mode "modification"
  };

  // Quand l'admin clique sur 🗑️
  // On supprime la date dans Firebase
  const handleDelete = async (id) => {
    if (window.confirm("Supprimer cette date ?")) {
      await deleteDoc(doc(db, "dates", id));
      setMessage("Date supprimée !");
      fetchDates();
      setTimeout(() => setMessage(""), 3000);
    }
  };

  // Déconnecte l'admin et le redirige vers /login
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR — barre de navigation en haut */}
      {/* Navbar est un composant Bootstrap = barre noire en haut */}
      <Navbar bg="dark" variant="dark" className="px-4 mb-4">
        <Navbar.Brand>YAMOTO — Admin</Navbar.Brand>
        {/* Button Bootstrap = bouton déjà stylisé */}
        {/* variant="outline-light" = bouton avec bordure blanche */}
        <Button
          variant="outline-light"
          size="sm"
          className="ms-auto"
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      </Navbar>

      {/* CONTAINER — centre le contenu et lui donne une largeur max */}
      {/* C'est un composant Bootstrap qui remplace <div class="container"> */}
      <Container>

        <h2 className="mb-4">Dates de tournée</h2>

        {/* MESSAGE DE SUCCÈS */}
        {/* Alert est un composant Bootstrap = bandeau coloré */}
        {/* Il s'affiche seulement si "message" n'est pas vide */}
        {message && (
          <Alert variant="success">{message}</Alert>
        )}

        {/* FORMULAIRE AJOUT / MODIFICATION */}
        {/* Form est un composant Bootstrap */}
        <Form onSubmit={handleSubmit} className="mb-5 p-4 border rounded">

          <h5 className="mb-3">
            {/* Le titre change selon si on est en mode ajout ou modification */}
            {editId ? "Modifier une date" : "Ajouter une date"}
          </h5>

          {/* On met les champs sur 2 colonnes avec une Row */}
          <div className="row g-3">

            {/* Champ Date */}
            <div className="col-md-6">
              <Form.Label>Date du concert</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Champ Ville */}
            <div className="col-md-6">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                name="ville"
                placeholder="Ex: Paris"
                value={form.ville}
                onChange={handleChange}
                required
              />
            </div>

            {/* Champ Pays */}
            <div className="col-md-6">
              <Form.Label>Pays</Form.Label>
              <Form.Control
                type="text"
                name="pays"
                placeholder="Ex: France"
                value={form.pays}
                onChange={handleChange}
                required
              />
            </div>

            {/* Champ Lieu */}
            <div className="col-md-6">
              <Form.Label>Lieu / Festival</Form.Label>
              <Form.Control
                type="text"
                name="lieu"
                placeholder="Ex: Zénith de Paris"
                value={form.lieu}
                onChange={handleChange}
                required
              />
            </div>

            {/* Checkbox Sold-out */}
            <div className="col-12">
              <Form.Check
                type="checkbox"
                name="soldout"
                label="Concert sold-out ?"
                checked={form.soldout}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Boutons du formulaire */}
          <div className="mt-3 d-flex gap-2">

            {/* Bouton principal — change selon le mode */}
            {/* variant="dark" = bouton noir */}
            <Button type="submit" variant="dark">
              {editId ? "Modifier" : "Ajouter"}
            </Button>

            {/* Bouton Annuler — visible seulement en mode modification */}
            {editId && (
              <Button
                type="button"
                variant="outline-secondary"
                onClick={() => {
                  setEditId(null);
                  setForm({ date: "", ville: "", pays: "", lieu: "", soldout: false });
                }}
              >
                Annuler
              </Button>
            )}

          </div>
        </Form>

        {/* TABLEAU DES DATES */}
        {/* Table est un composant Bootstrap */}
        {/* striped = lignes alternées / bordered = avec bordures / hover = surbrillance */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Ville</th>
              <th>Pays</th>
              <th>Lieu</th>
              <th>Sold-out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((concert) => (
              <tr key={concert.id}>
                <td>{concert.date}</td>
                <td>{concert.ville}</td>
                <td>{concert.pays}</td>
                <td>{concert.lieu}</td>
                <td>
                  {/* Badge est un composant Bootstrap = petite pastille colorée */}
                  {/* Si sold-out → pastille rouge, sinon → pastille verte */}
                  <Badge bg={concert.soldout ? "danger" : "success"}>
                    {concert.soldout ? "Sold-out" : "Disponible"}
                  </Badge>
                </td>
                <td className="d-flex gap-2">
                  {/* Bouton modifier — variant="warning" = bouton jaune */}
                  <Button
                    size="sm"
                    variant="warning"
                    onClick={() => handleEdit(concert)}
                  >
                    ✏️ Modifier
                  </Button>
                  {/* Bouton supprimer — variant="danger" = bouton rouge */}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(concert.id)}
                  >
                    🗑️ Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
    </>
  );
}

export default Admin;