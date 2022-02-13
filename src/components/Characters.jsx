import React, { useState, useEffect } from "react";
import service from "../config";
import Character from "./Character";
import CharacterDetails from "./CharacterDetails";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const res = await service.get("characters");
    setCharacters(res.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {/* {characters.map((character) => (
        <Character key={character.char_id} character={character} />
      ))} */}
      <hr />

      {characters.map((character) => (
        <CharacterDetails key={character.char_id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
