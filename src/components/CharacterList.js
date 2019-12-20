import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const WrapperDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 400px;
  background-color: rgb(0, 191, 255, 0.3);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

const WrapperSec = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapperForm = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 10px;
`;


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
        console.log(response.data.results);
        const characters = response.data.results.filter(
          character =>
            character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
    <WrapperForm className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
          />
        </WrapperForm>
    <WrapperSec className="character-list">

      

        {data.map(charInfo => {
          return (
            <WrapperDiv
              className="character-list "
              key={charInfo.id}
            >
              <h2>
                {charInfo.name}
              </h2>
              <img src={charInfo.image}></img>
              <p className="capital">
                Created: {charInfo.created}
              </p>
            </WrapperDiv>
          );
        })}
    </WrapperSec>
    </>
  );
}
