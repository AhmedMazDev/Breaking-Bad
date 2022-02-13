import React, { useState, useEffect } from 'react';
import service from '../config';
import Character from './Character';
import CharacterDetails from './CharacterDetails';

const Characters = props => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const res = await service.get('characters');
    setCharacters(res.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="characters">
      <h1 className="title">Characters</h1>

      <div className="charactersList">
        {characters.map(character => (
          <Character key={character.char_id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
