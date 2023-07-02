import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function OnePlanet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null)
// ^^^ need another piece of State for the error //

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(res => {
        console.log(res.data);
        setPlanet(res.data);
        setError(null)
        // ^^^ setError to null if no 
      })
      .catch(err => {
        console.log(err);
        setError("This is not the planet you're looking for!")
      })
  }, [id]);

  if (error) {
    return <h3>{error}</h3>
  }

  return (
    <div className="card">
      {planet && (
      <div className="card-body">
        <h1>{planet.name}</h1>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Surface Water: {planet.surface_water}</p>
        <p>Population: {planet.population}</p>
      </div>
      )}
    </div>
  );
}


export default OnePlanet