import React from "react";

const Input = ({ name, value, label, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="for">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
