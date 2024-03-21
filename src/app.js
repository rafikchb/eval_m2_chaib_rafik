// src/app.js
console.log("Tout fonctionne");

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter ,Routes , Route} from "react-router-dom";
import ClientListPage from "./pages/ClientListPage";
import Home from "./pages/Home";
import ClientForm from "./components/ClientForm";
import Client from "./components/Client";
import Invoice from "./components/invoice";


const Hello = () => {
       return <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />  /*this is the home page it should display all the clients*/
        <Route path="/create" element={<ClientForm/>} /> 
        <Route path="/:id" index element={<Client/>} />
        <Route path="/:id/invoices/add" index element={<Invoice/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
       </Routes>
       </BrowserRouter>
}

const  container = document.querySelector('main') ;
const root = createRoot(container);
root.render(<Hello/>);