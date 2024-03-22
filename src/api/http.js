const SUPABASE_URL = "https://wywxywzvzqusctigqdma.supabase.co/rest/v1";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5d3h5d3p2enF1c2N0aWdxZG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4OTExMjEsImV4cCI6MjAyNjQ2NzEyMX0.xbP9AEsYB_hJc6PWQBflzFhOEtaDLM6sDQJqf8OIC1c";

export const loadClientsFromApi = async () => {
    const response = await fetch(SUPABASE_URL + "/customers?select=*", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_API_KEY,
            Prefer: "return=representation"
        }
    });
    // check if the response is ok
    if (!response.ok) {
        throw new Error("Failed to load clients");
    }
    return await response.json();
}

export const addClientToApi = async (client) => {
    const response = await fetch(SUPABASE_URL + "/customers", {
        method: "POST",
        body: JSON.stringify(client),
        headers: {
            Authorization: "Bearer " + SUPABASE_API_KEY,
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=minimal"
        },
    });
    if (!response.ok) {
        throw new Error("Failed to create client");
    }
}

export const loadClientFromApi = async (id) => {
    const clientResponse = await fetch(`${SUPABASE_URL}/customers?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    });
    const invoiceResponse = await fetch(`${SUPABASE_URL}/invoices?client=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    });
    
    if (!clientResponse.ok || !invoiceResponse.ok) {
        throw new Error("Failed to load client");
    }

    const clients = await clientResponse.json();
    if (clients.length === 0) {
        throw new Error("Client not found");
    }
    const clientInvoice = await invoiceResponse.json();
    clients[0].invoices = clientInvoice;

    return clients[0];
}


export const addInvoiceToClientToApi = async (invoice, clientId) => {
    const response = await fetch(SUPABASE_URL + "/invoices", {
        method: "POST",
        body: JSON.stringify({ ...invoice, client: clientId }),
        headers: {
            Authorization: "Bearer " + SUPABASE_API_KEY,
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=minimal"
        },
    });
    if (!response.ok) {
        throw new Error("Failed to create invoice");
    }
}