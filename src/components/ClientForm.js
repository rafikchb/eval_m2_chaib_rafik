import React, { useState } from "react";
const ClientForm = (props) => {

  return (
    <form onSubmit={props.handleFromSubmit}>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Nom complet</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          placeholder="Nom complet"
          onChange={props.updateFormData}
          value={props.form.fullName}
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          onChange={props.updateFormData}
          value={props.form.email}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Enregistrer</button>
    </form>
  );
}
export default ClientForm;