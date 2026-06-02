// Page d'administration des dates de tournée
// Accessible uniquement après connexion

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button, Form, Badge, Navbar, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {

  // Liste des dates récupérées depuis Firebase
  const [dates, setDates] = useState([]);

  // Données du formulaire
  const [form, setForm] = useState({
    date: "",
    ville: "",
    pays: "",
    lieu: "",
    soldout: false,
  });

  // ID de la date en cours de modification
  const [editId, setEditId] = useState(null);

  // Message de succès
  const [message, setMessage] = useState("");

  // Contrôle si le formulaire est visible ou pas
  // false = caché par défaut
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  // Récupère les dates au chargement de la page
  useEffect(() => {
    fetchDates();
  }, []);

  const fetchDates = async () => {
    const snapshot = await getDocs(collection(db, "dates"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setDates(data);
  };

  // Met à jour le formulaire quand l'admin tape quelque chose
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // Ajoute ou modifie une date
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // Mode modification
      await updateDoc(doc(db, "dates", editId), form);
      setMessage("Date modifiée avec succès !");
      setEditId(null);
    } else {
      // Mode ajout
      await addDoc(collection(db, "dates"), form);
      setMessage("Date ajoutée avec succès !");
    }

    // Vide le formulaire
    setForm({ date: "", ville: "", pays: "", lieu: "", soldout: false });

    // Cache le formulaire après validation
    setShowForm(false);

    // Recharge les dates
    fetchDates();

    // Efface le message après 3 secondes
    setTimeout(() => setMessage(""), 3000);
  };

  // Remplit le formulaire avec les données à modifier
  // et affiche le formulaire
  const handleEdit = (concert) => {
    setForm({
      date: concert.date,
      ville: concert.ville,
      pays: concert.pays,
      lieu: concert.lieu,
      soldout: concert.soldout,
    });
    setEditId(concert.id);
    // Affiche le formulaire en mode modification
    setShowForm(true);
  };

  // Supprime une date
  const handleDelete = async (id) => {
    if (window.confirm("Supprimer cette date ?")) {
      await deleteDoc(doc(db, "dates", id));
      setMessage("Date supprimée !");
      fetchDates();
      setTimeout(() => setMessage(""), 3000);
    }
  };

  // Déconnecte l'admin
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="dark" variant="dark" className="px-4 mb-4">
        <Navbar.Brand>YAMOTO — Admin</Navbar.Brand>
        <Button
          variant="outline-light"
          size="sm"
          className="ms-auto"
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      </Navbar>

      <Container>

        <h2 className="mb-4">Dates de tournée</h2>

        {/* MESSAGE DE SUCCÈS */}
        {message && <Alert variant="success">{message}</Alert>}

        {/* BOUTON AJOUTER — visible seulement si le formulaire est caché */}
        {!showForm && (
          <Button
            variant="dark"
            className="mb-4"
            onClick={() => setShowForm(true)}
          >
            + Ajouter une date
          </Button>
        )}

        {/* FORMULAIRE — visible seulement si showForm est true */}
        {showForm && (
          <Form onSubmit={handleSubmit} className="mb-5 p-4 border rounded">

            <h5 className="mb-3">
              {editId ? "Modifier une date" : "Ajouter une date"}
            </h5>

            <div className="row g-3">

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

            <div className="mt-3 d-flex gap-2">
              <Button type="submit" variant="dark">
                {editId ? "Modifier" : "Ajouter"}
              </Button>

              {/* Bouton annuler — cache le formulaire et vide les champs */}
              <Button
                type="button"
                variant="outline-secondary"
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                  setForm({ date: "", ville: "", pays: "", lieu: "", soldout: false });
                }}
              >
                Annuler
              </Button>
            </div>

          </Form>
        )}

        {/* TABLEAU DES DATES */}
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
                  <Badge bg={concert.soldout ? "danger" : "success"}>
                    {concert.soldout ? "Sold-out" : "Disponible"}
                  </Badge>
                </td>
                <td className="d-flex gap-2">
                  <Button size="sm" variant="warning" onClick={() => handleEdit(concert)}>
                    ✏️ Modifier
                  </Button>
                  <Button size="sm" variant="danger" onClick={() => handleDelete(concert.id)}>
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