import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addInvoiceToClientToApi, loadClientFromApi } from "../api/http";
import InvoiceForm from "../components/InvoiceForm";
const InvoiceCreationPage = () => {
  const [form, setForm] = useState({
    amount: "",
    status: "SENT"
  });
  const [error, setError] = useState(null); // State to hold error information

  const [client, setClient] = useState(null);
  const params = useParams();
  const clientId = +params.id;
  const navigate = useNavigate();

  useEffect(() => {
    loadClientFromApi(clientId)
      .then(client => setClient(client))
      .catch(error => {
        console.error("Error loading client:", error);
        setClient(null);
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
      .catch(error => {
        setError(error);
      });
  }

  return (
    <div className="container">
      {client ? (
        <>
          <h1>Ajouter une facture pour {client.fullName}</h1>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <InvoiceForm form={form} updateFormData={updateFormData} handleFromSubmit={handleFromSubmit} />
        </>

      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default InvoiceCreationPage;