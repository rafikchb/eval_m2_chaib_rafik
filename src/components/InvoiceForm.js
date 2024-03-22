import React from "react";

const InvoiceForm = (props) => {
    return (
        <form onSubmit={props.handleFromSubmit}>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Montant</label>
                <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    value={props.form.amount}
                    onChange={props.updateFormData}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="status" className="form-label">Statu</label>
                <select
                    className="form-select"
                    id="status"
                    name="status"
                    value={props.form.status}
                    onChange={props.updateFormData}
                    required
                >
                    <option value="SENT" >Envoyé</option>
                    <option value="PAID">Payé</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Enregistrer la facture</button>
        </form>
    );
}

export default InvoiceForm;