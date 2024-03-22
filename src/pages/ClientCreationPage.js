
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addClientToApi } from "../api/http";
const TaskForm = (props) => {
    // Créons un état (qui pourra évoluer dynamiquement) qui représentera
    // la chaîne tapée par l'utilisateur dans l'<input>
    const [form, setForm] = useState({ 
        fullName : "",
        email : ""    
    });
    const navigate = useNavigate();
    const updateFormData = (event) => {
        // destructuring the event object 
        const { name, value } = event.target;
        // Updating the state of the form 
        setForm({ ...form, [name]: value });
        console.log(form);
    }

    const handleFromSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de recharger la page
        event.preventDefault();
        addClientToApi(form).then(() => {
            // Redirigeons l'utilisateur vers la page d'accueil
            navigate("/");
        });
    }

    return (
        <div className="container">
            <h1>Ajouter un client</h1>
          <form onSubmit={handleFromSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Nom complet</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                placeholder="Nom complet"
                onChange={updateFormData}
                value={form.fullName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                onChange={updateFormData}
                value={form.email}
              />
            </div>
            <button type="submit" className="btn btn-primary">Enregistrer</button>
          </form>
        </div>
      );
}
export default TaskForm;