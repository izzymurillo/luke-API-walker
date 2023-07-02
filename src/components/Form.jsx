import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    resource: "people",
    //must match name "resource" below
    id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { resource, id } = formState;
    navigate(`/${resource}/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // e.target.name refers to line 37 "resource"  //
    // e.target.value is what user is typing"  //
    setFormState({
      ...formState,
      [name]: value,
      // MUST USE EXACT SAME KEYS as state & input //
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between gap-3">
            <h6>Search for:</h6>
            <select
              name="resource"
              id="resource"
              className="form-select"
              value={formState.resource}
              /* from lines 7 & 8 */
              onChange={handleChange}
            >
              <option value="people">People</option>
              <option value="planets">Planets</option>
            </select>
            <input
              type="number"
              name="id"
              id="id"
              className="form-control"
              placeholder="ID"
              value={formState.id}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
