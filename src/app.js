import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import ClientCreationPage from "./pages/ClientCreationPage";
import InvoiceCreationPage from "./pages/InvoiceCreationPage";
import HomePage from "./pages/HomePage";


const Hello = () => {
       return <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/create" element={<ClientCreationPage/>} /> 
        <Route path="/:id"  element={<ClientDetailsPage/>} /> 
        <Route path="/:id/invoices/add"  element={<InvoiceCreationPage/>} /> 
        <Route path="*" element={<h1>Not Found</h1>} /> 
       </Routes>
       </BrowserRouter>
}

const  container = document.querySelector('main') ;
const root = createRoot(container);
root.render(<Hello/>);