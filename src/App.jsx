import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import People from "./components/People";
import Planets from "./components/Planets";
import LukeAPI from "./components/LukeAPI";
import "./bootstrap.min.css";
import OnePerson from "./components/OnePerson";
import OnePlanet from "./components/OnePlanet";
import Form from "./components/Form";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Form />
        <Routes>
          <Route path="/" element={<LukeAPI />}>
            <Route path="people/" element={<People />}>
              <Route path=":id" element={<OnePerson />} />
            </Route>
            <Route path="planets/" element={<Planets />} >
              <Route path=":id" element={<OnePlanet />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
