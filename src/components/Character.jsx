import React from "react";

const Character = ({ character }) => {
  return (
    <div className="character">
      <img src={character.img} />
      <h1>{character.name}</h1>
    </div>
  );
};

export default Character;
