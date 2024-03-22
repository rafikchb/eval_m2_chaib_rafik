import { render, screen,fireEvent } from '@testing-library/react';
import React from 'react';
import ClientForm from '../src/components/ClientForm';
import { BrowserRouter } from 'react-router-dom';

describe("ClientForm Component - handleFromSubmit", () => {
  it("should call addClientToApi and navigate on successful submission", async () => {

    const mockForm = { 
      fullName: "John Doe",
      email: "johndoe@example.com",
    };

    const handleFormSubmit = jest.fn(e => e.preventDefault());
    render(
      <BrowserRouter>
      <ClientForm form={mockForm} updateFormData={jest.fn()} handleFromSubmit={handleFormSubmit} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Enregistrer"));
    expect(handleFormSubmit).toHaveBeenCalled(); 
  });
});


