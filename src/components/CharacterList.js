import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(
        `https://rickandmortyapi.com/api/character/`,
      )
      .then(response => {
        const characters = response.results.filter(
          character =>
            character.name
              .toLowerCase()
              .includes(query.toLowerCase())
        );
         console.log("Rick & Morty characters", response);
        setData(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
