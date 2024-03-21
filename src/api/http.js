// keys 
const SUPABASE_URL = "https://wywxywzvzqusctigqdma.supabase.co/rest/v1/customers";
const SUPABASE_URL_invoices = "https://wywxywzvzqusctigqdma.supabase.co/rest/v1/invoices";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5d3h5d3p2enF1c2N0aWdxZG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4OTExMjEsImV4cCI6MjAyNjQ2NzEyMX0.xbP9AEsYB_hJc6PWQBflzFhOEtaDLM6sDQJqf8OIC1c";

// export a method that will fetch all the clients from the api 
export const loadClientsFromApi = async () => {
    // use the api key as a bearer token to authenticate the request
    const response = await fetch(SUPABASE_URL + "?select=*", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_API_KEY,
            Prefer: "return=representation"
        }
    }) ; 
    
    // the body represents a list of clients
    return await response.json();
}

// export a method that will create a new client in the api 
export const addClientToApi = async (client) => {
    const response = await fetch(SUPABASE_URL, {
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

/**
 * Récupère les donnes des tâches à partir de l'API
 * @returns Promise<Array<{id: number, text: string, done: boolean}>>
 */
export const loadClientFromApi =  async (id) => {
    const clientResponse = await fetch(`${SUPABASE_URL}?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    });
    const invoiceResponse = await fetch(`${SUPABASE_URL_invoices}?client=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    });
    const clients = await clientResponse.json();
    const clientInvoice = await invoiceResponse.json();
    console.log("clientInvoice", clientInvoice);
    clients[0].invoices = clientInvoice;
    return clients[0];
}


export const addInvoiceToClientToApi = async (invoice, clientId) => {
    const response = await fetch(SUPABASE_URL_invoices, {
        method: "POST",
        body: JSON.stringify({ ...invoice, client : clientId }),
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