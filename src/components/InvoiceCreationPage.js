import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addInvoiceToClientToApi, loadClientFromApi } from "../api/http";

const Invoice = () => {
  const [form, setForm] = useState({ 
    amount : "",
    status : "SENT"    
  });

  const [client, setClient] = useState(null);
  const params = useParams();
  const clientId = +params.id;
  const navigate = useNavigate();

  useEffect(() => {
    loadClientFromApi(clientId)
      .then(client => setClient(client))
      .catch(error => {
        console.error("Error loading client:", error);
        setClient(null); // Set client to null in case of error
      });
  }, [clientId]);

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const handleFromSubmit = (event) => {
    event.preventDefault();
    addInvoiceToClientToApi(form, clientId)
      .then(() => navigate("/" + clientId))
      .catch(error => console.error("Error adding invoice:", error));
  }

  return (
    <div className="container">
      {client ? (
        <>
          <h1>Création d'une nouvelle facture pour {client.fullName}</h1>
          <form onSubmit={handleFromSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Montant</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                onChange={updateFormData}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">Statu</label>
              <select
                className="form-select"
                id="status"
                name="status"
                value={form.status}
                onChange={updateFormData}
                required
              >
                <option value="SENT" selected >Envoyé</option>
                <option value="PAID">Payé</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Enregistrer la facture</button>
          </form>
        </>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default Invoice;