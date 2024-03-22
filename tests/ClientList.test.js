import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClientList from '../src/components/ClientList';

describe("ClientList Component", () => {
  it("should render a loading message when clients prop is not provided", () => {
    render(
      <BrowserRouter>
        <ClientList clients={null} />
      </BrowserRouter>
    );
    const loadingMessage = screen.getByText("Chargement en cours", { exact: true }); 
    expect(loadingMessage).toBeDefined()
  });

  it("should render an empty message when clients prop is empty array", () => {
    render(
      <BrowserRouter>
        <ClientList clients={[]} />
      </BrowserRouter>
    );
    const emptyMessage = screen.getByText("Aucun client disponible", { exact: true }); 
    expect(emptyMessage).toBeDefined(); 
  });

  it("should render the list of clients with links", async () => {
    const clients = [
      { id: 1, fullName: "Raf", email: "rafik@hotmail.fr" },
      { id: 2, fullName: "John Doe", email: "johndoe@example.com" },
    ];
    render(
      <BrowserRouter>
        <ClientList clients={clients} />
      </BrowserRouter>
    );

    const clientNames = await screen.findAllByRole('heading'); 

    expect(clientNames).toHaveLength(2);
  });
});
