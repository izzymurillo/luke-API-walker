import React from "react";
import { Outlet } from "react-router-dom";
// on App.jsx we made this a parent route so
// Outlet is needed

function Planets() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>Planets</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Planets;
