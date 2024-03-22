import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loadClientFromApi } from "../api/http";

const ClientDetailsPage = () => {
  const [client, setClient] = useState(null);
  const [error, setError] = useState(null); // State to hold error information

  const params = useParams();
  const id = +params.id;
  console.log("ID", id);

  useEffect(() => {
    console.log("Chargement du client", id);
    loadClientFromApi(id)
      .then(client => setClient(client)).catch(error => {
        setError(error);
      });
  }, [id])

  return (
    <>
      {error ? (
        <div className="alert alert-danger container mt-4" >
          {error.message}
          <br />
         <Link to="/" className="">Retour aux clients</Link>
        </div>
      ) : client ? (
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
      ) : (
        <p>Chargement en courss</p>
      )}
    </>
  );
}

export default ClientDetailsPage;