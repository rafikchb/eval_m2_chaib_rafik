import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientListPage from './ClientListPage';
const Home = () => {
  
    return (
        <div>
            <h1>my APP</h1>
            <Link to={`${window.location.origin}/create`}>Créer un client</Link>
            <ClientListPage />

        </div>
    );
}
export default Home;