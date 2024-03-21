import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loadClientFromApi } from "../api/http";

const Client = () => {
    const [client, setClient] = useState(null);
    const params = useParams();
    const id = +params.id;
    console.log("ID", id);

    // Un effet doit être lancé par React à chaque fois que l'ID change
    useEffect(() => {
        console.log("Chargement du client", id);
        // On appelle l'API et lorsqu'on reçoit la tâche
        // correspondante, on remplace l'ancien state "task"
        // par les données que l'API a retourné
        loadClientFromApi(id)
            .then(client => setClient(client));
    }, [id])

    // En fonction du state "task" (null ou pas), on retourne
    // un arbre JSX différent
    return client ?
        <>
            <h2>{client.fullName}</h2>
            <p>Email : {client.email}</p>
            <Link to="/">Retour aux clients</Link> <br />
 <Link to={'invoices/add'}>Créer une facture</Link>
 <table>
                <thead>
                    <tr>
                        <th>Montant</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {client.invoices.map(invoice => (
                        <tr key={invoice.id}>
                            <td>{invoice.amount}</td>
                            <td>{invoice.status}</td>
                        </tr>
                    ))}
                </tbody>    
 </table>
        </>
        :
        <p>Chargement en cours</p>
}

export default Client;