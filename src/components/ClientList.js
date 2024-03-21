// src/components/TodoList.js
import { Link  } from "react-router-dom";
import React from "react";
// Passsing a list of props to the ClientList component 
const ClientList = (props) => {
    return <>
        <ul>
            {props.clients.map(client =>
             <li key={client.id}>
                <label>
                  <Link to={client.id + ""}> {client.fullName}</Link>
                </label>
            </li>)}
        </ul>
    </>
}
export default ClientList;