import React from 'react'; 
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadClientsFromApi } from '../api/http';
import ClientList from '../components/ClientList';

// is this application i am using pico css for styling add some css to the home page 
const HomePage = () => {
    const [state, setState ] = useState(null);

    useEffect(() => {
        loadClientsFromApi()
            .then((clients) => {
                console.log("clients",clients);
                setState(clients);
            });
    }, []);
    
    return (
        <div className="container">
            <h1>Clients - Invoices App</h1>
            <h2>Liste des client</h2>
            <Link to={`${window.location.origin}/create` } >Créer un client</Link>
            <ClientList clients={state} />
        </div>
    );
}

export default HomePage;