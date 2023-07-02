import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function OnePerson() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError("These aren't the droids you're looking for!");
      });
  }, [id]);

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="card">
      {person && (
        <div className="card-body">
          <h1>{person.name}</h1>
          <p>Height: {person.height} cm</p>
          <p>Mass: {person.mass} kg</p>
          <p>Hair Color: {person.hair_color}</p>
          <p>Skin Color: {person.skin_color}</p>
        </div>
      )}
    </div>
  );
}

export default OnePerson;
