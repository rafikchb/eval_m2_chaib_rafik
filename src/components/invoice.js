import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addInvoiceToClientToApi } from "../api/http";
const Invoice = () => {
  const [form, setForm] = useState({ 
        amount : "",
        status : ""    
    });
    const params = useParams();
    const clientId = +params.id;
    const navigate = useNavigate();
    
    const updateFormData = (event) => {
        // destructuring the event object 
        const { name, value } = event.target;
        // Updating the state of the form 
        setForm({ ...form, [name]: value });
        
    }

    const handleFromSubmit = (event) => {
        // Annulons le comportement par défaut de l'événement
        // qui serait de rechargeradd la page
        event.preventDefault();
        addInvoiceToClientToApi(form,clientId).then(() => {
            // Redirigeons l'utilisateur vers la page d'accueil
            navigate("/"+clientId);
        });
    }


    return <div>
        <form onSubmit={handleFromSubmit}>
        <input type="text"name="amount" onChange={updateFormData}/>
        <select 
        value={form.status} name="status" 
        onChange={updateFormData}>
            <option value="PAID">Client 1</option>
            <option value="SENT">Client 2</option>
        </select>
        <button type="submit">Enregistrer la facture</button>
        </form>
    </div>
}
export default Invoice;