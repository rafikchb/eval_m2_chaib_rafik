
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

    return <form onSubmit={handleFromSubmit}>
        <label htmlFor="fullName">Nom complet</label>
        <input
            type="text"
            name="fullName"
            placeholder="Nom complet"
            onChange={updateFormData}
            value={form.fullName}
        />
        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateFormData}
            value={form.email}  
        />
        <button type="submit">Enregistrer</button>
    </form>
}
export default TaskForm;