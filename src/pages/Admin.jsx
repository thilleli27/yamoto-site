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

  const [dates, setDates] = useState([]);
  const [form, setForm] = useState({
    date: "",
    ville: "",
    pays: "",
    lieu: "",
    soldout: false,
  });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDates();
  }, []);

  const fetchDates = async () => {
    const snapshot = await getDocs(collection(db, "dates"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setDates(data);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateDoc(doc(db, "dates", editId), form);
      setMessage("Date modifiée avec succès !");
      setEditId(null);
    } else {
      await addDoc(collection(db, "dates"), form);
      setMessage("Date ajoutée avec succès !");
    }
    setForm({ date: "", ville: "", pays: "", lieu: "", soldout: false });
    setShowForm(false);
    fetchDates();
    setTimeout(() => setMessage(""), 3000);
  };

  const handleEdit = (concert) => {
    setForm({
      date: concert.date,
      ville: concert.ville,
      pays: concert.pays,
      lieu: concert.lieu,
      soldout: concert.soldout,
    });
    setEditId(concert.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer cette date ?")) {
      await deleteDoc(doc(db, "dates", id));
      setMessage("Date supprimée !");
      fetchDates();
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh' }}>

      {/* NAVBAR */}
      <Navbar style={{ backgroundColor: '#C60000' }} className="px-4 mb-4">
        <Navbar.Brand style={{
          color: '#fff',
          fontFamily: 'Anton, sans-serif',
          fontSize: '24px',
          letterSpacing: '2px',
        }}>
          YAMOTO — ADMIN
        </Navbar.Brand>
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

        {/* TITRE */}
        <h2 style={{
          color: '#fff',
          fontFamily: 'Anton, sans-serif',
          fontSize: '48px',
          letterSpacing: '2px',
          marginBottom: '24px',
        }}>
          DATES DE TOURNÉE
        </h2>

        {/* MESSAGE DE SUCCÈS */}
        {message && (
          <Alert variant="success" style={{ borderRadius: '4px' }}>
            {message}
          </Alert>
        )}

        {/* BOUTON AJOUTER */}
        {!showForm && (
          <Button
            style={{
              backgroundColor: '#C60000',
              border: 'none',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '1px',
              marginBottom: '24px',
            }}
            onClick={() => setShowForm(true)}
          >
            + Ajouter une date
          </Button>
        )}

        {/* FORMULAIRE */}
        {showForm && (
          <Form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: '#222',
              padding: '32px',
              borderRadius: '8px',
              marginBottom: '40px',
              border: '1px solid #333',
            }}
          >
            <h5 style={{
              color: '#fff',
              fontFamily: 'Anton, sans-serif',
              fontSize: '24px',
              letterSpacing: '2px',
              marginBottom: '24px',
            }}>
              {editId ? "MODIFIER UNE DATE" : "AJOUTER UNE DATE"}
            </h5>

            <div className="row g-3">

              <div className="col-md-6">
                <Form.Label style={{ color: '#aaa' }}>Date du concert</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#333', border: 'none', color: '#fff' }}
                />
              </div>

              <div className="col-md-6">
                <Form.Label style={{ color: '#aaa' }}>Ville</Form.Label>
                <Form.Control
                  type="text"
                  name="ville"
                  placeholder="Ex: Paris"
                  value={form.ville}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#333', border: 'none', color: '#fff' }}
                />
              </div>

              <div className="col-md-6">
                <Form.Label style={{ color: '#aaa' }}>Pays</Form.Label>
                <Form.Control
                  type="text"
                  name="pays"
                  placeholder="Ex: France"
                  value={form.pays}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#333', border: 'none', color: '#fff' }}
                />
              </div>

              <div className="col-md-6">
                <Form.Label style={{ color: '#aaa' }}>Lieu / Festival</Form.Label>
                <Form.Control
                  type="text"
                  name="lieu"
                  placeholder="Ex: Zénith de Paris"
                  value={form.lieu}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#333', border: 'none', color: '#fff' }}
                />
              </div>

              <div className="col-12">
                <Form.Check
                  type="checkbox"
                  name="soldout"
                  label="Concert sold-out ?"
                  checked={form.soldout}
                  onChange={handleChange}
                  style={{ color: '#aaa' }}
                />
              </div>

            </div>

            <div className="mt-4 d-flex gap-2">
              <Button
                type="submit"
                style={{
                  backgroundColor: '#C60000',
                  border: 'none',
                  letterSpacing: '1px',
                }}
              >
                {editId ? "Modifier" : "Ajouter"}
              </Button>

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
        {!showForm && (
          <Table
            striped
            bordered
            hover
            responsive
            style={{
              color: '#fff',
              borderColor: '#333',
            }}
            className="table-dark"
          >
            <thead style={{ backgroundColor: '#C60000' }}>
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
        )}

      </Container>
    </div>
  );
}

export default Admin;