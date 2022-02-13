import React, { useState } from 'react';
import CharacterDetails from './CharacterDetails';

const Character = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = state => setModalOpen(state);

  return (
    <div
      className="character"
      onClick={() => {
        !modalOpen && toggleModal(true);
      }}
    >
      <img src={character.img} />
      <h2>{character.name}</h2>
      {modalOpen ? <CharacterDetails character={character} toggleModal={toggleModal} /> : ''}
    </div>
  );
};

export default Character;
