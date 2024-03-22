import React from "react";
import ClientList from "../components/ClientList";
import { loadClientsFromApi } from "../api/http";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ClientListPage = () => {

    return (<>
        <Link to={`${window.location.origin}/create`}>Créer un client</Link>
        <ClientList clients={state} />
    </>
    );
};

export default ClientListPage;