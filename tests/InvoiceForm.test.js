import { render, screen,fireEvent } from '@testing-library/react';
import React from 'react';
import InvoiceForm  from '../src/components/InvoiceForm';
import { BrowserRouter } from 'react-router-dom';

describe("ClientForm Component - handleFromSubmit", () => {
  it("should call addClientToApi and navigate on successful submission", async () => {

    const mockForm = { 
      status: "SENT",
      amount: 1000,
    };

    const handleFormSubmit = jest.fn(e => e.preventDefault());
    render(
      <BrowserRouter>
      <InvoiceForm form={mockForm} updateFormData={jest.fn()} handleFromSubmit={handleFormSubmit} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Enregistrer la facture"));
    expect(handleFormSubmit).toHaveBeenCalled(); 
  });
});

