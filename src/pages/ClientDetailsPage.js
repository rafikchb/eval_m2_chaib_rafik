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

    return client ? (
        <>
          <div className="container">
            <h2 className="mb-4">Details de {client.fullName}</h2>
            <p className="m-0">Nom Complet : {client.fullName}</p>
            <p>Email : {client.email}</p>
            <Link to="/">Retour aux clients</Link>
            <h3 className="mt-3">Factures de {client.fullName} </h3>
            <Link to={`invoices/add`} className="btn btn-primary">Créer une facture</Link>
            {client.invoices.length === 0 ? (
              <p>Pas de facture pour {client.fullName}</p>
            ) : (
              <table className="table mt-4">
                <thead>
                  <tr>
                  <th scope="col">ID</th>
                    <th scope="col">Montant</th>
                    <th scope="col">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {client.invoices.map(invoice => (
                    <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                      <td>{invoice.amount}</td>
                      <td>{invoice.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      ) : (
        <p>Chargement en cours</p>
      );
}

export default Client;