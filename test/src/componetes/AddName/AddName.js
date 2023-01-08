import { useState } from "react";

import "./AddName.css";

const AddName = ({ onAdd }) => {

  const [name, setName] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    onAdd({ name });

    setName('');

  };

  return (
    <div className="add-name-form">
      <form className="row g-3" onSubmit={submitForm}>
        <div className="col-auto">
          <label className="visually-hidden">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddName;
