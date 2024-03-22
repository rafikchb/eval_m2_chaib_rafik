import React from "react";
import { Link } from "react-router-dom";

const ClientList = (props) => {
  // Check if props is null or undefined
  if (!props.clients ) {
    return <p>Chargement en cours</p>;
  }

  // Check if props.clients is null or undefined
if ( props.clients.length === 0) {
    return <p>Aucun client disponible</p>;
  }

  // If props.clients has data, render the list
  return (
    <div >
    {props.clients.map((client) => (
      <ul className="mt-4" key={client.id}>
        <li>
        <h3>  
          <Link to={`/${client.id}`} >
            {client.fullName}
          </Link>
        </h3>
        <p className="d-inline">Email: {client.email}</p>
        </li>
      </ul>
    ))}
  </div>
  
  );
};

export default ClientList;
