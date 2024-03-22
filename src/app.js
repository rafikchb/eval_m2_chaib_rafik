// src/app.js
console.log("Tout fonctionne");

import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./pages/ClientDetailsPage";
import ClientForm from "./pages/ClientCreationPage";
import Invoice from "./components/InvoiceCreationPage";
import HomePage from "./pages/HomePage";


const Hello = () => {
       return <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} />  /*this is the home page it should display all the clients*/
        <Route path="/create" element={<ClientForm/>} /> /*this is the form to create a new client*/
        <Route path="/:id" index element={<Client/>} /> /*this is the page to display a single client*/
        <Route path="/:id/invoices/add" index element={<Invoice/>} /> /*this is the page to create a new invoice*/
        <Route path="*" element={<h1>Not Found</h1>} /> /*this is the page to display a 404 error*/
       </Routes>
       </BrowserRouter>
}

const  container = document.querySelector('main') ;
const root = createRoot(container);
root.render(<Hello/>);