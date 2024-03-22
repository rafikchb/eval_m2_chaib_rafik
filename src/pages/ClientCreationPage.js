import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addClientToApi } from "../api/http";
import ClientForm from "../components/ClientForm";
const ClientCreationPage = (props) => {
  const [form, setForm] = useState({
    fullName: "",
    email: ""
  });
  const [error, setError] = useState(null); // State to hold error information
  const navigate = useNavigate();
  const updateFormData = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  }

  const handleFromSubmit = (event) => {
    event.preventDefault();
    addClientToApi(form).then(() => {
      navigate("/");
    }).catch(error => { 
      setError(error);
    });
  }
  return (
    <div className="container">
      <h1>Ajouter un client</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}
      <ClientForm form={form} updateFormData={updateFormData} handleFromSubmit={handleFromSubmit} />
    </div>
  );
}
export default ClientCreationPage;