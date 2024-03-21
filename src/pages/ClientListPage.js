import React from "react";
import ClientList from "../components/ClientList";
import { loadClientsFromApi } from "../api/http";
import { useEffect, useState } from "react";
const ClientListPage = () => {
    const [state, setState ] = useState([]);

    useEffect(() => {
        loadClientsFromApi()
            .then((clients) => {
                console.log("clients",clients);
                setState(clients);
            });
    }, []);
 
    return (
        <ClientList clients={state} />
    ); 
} ; 

export default ClientListPage;