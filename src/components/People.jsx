import React from "react";
import { Outlet } from "react-router-dom";
// on App.jsx we made this a parent route so
// Outlet is needed

function People() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>People</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default People;
