import React, { useState, useEffect } from 'react';
import service from '../config';

const CharacterDetails = ({ character, toggleModal }) => {
  const [deathCount, setDeathCount] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState();

  const name = character.name.replace(' ', '+');

  const fetchDeaths = async () => {
    const res = await service.get(`death-count?name=${name}`);
    setDeathCount(res.data.map(item => item.deathCount));
  };

  const fetchQuotes = async () => {
    const res = await service.get(`quote?author=${name}`);
    setQuotes(res.data || []);
    setQuote(res.data[0]?.quote ?? '');
  };

  const getOtherQuote = () => {
    let newQuote = '';
    while (true) {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)].quote;
      if (quote !== newQuote) break;
    }

    setQuote(newQuote);
  };

  useEffect(() => {
    fetchDeaths();
    fetchQuotes();
  }, []);

  return (
    <div className="characterDetails">
      <button className="close-btn" onClick={() => toggleModal(false)}>
        close
      </button>
      <h1 className="nickname">{character.nickname}</h1>

      <div className="content">
        <div className="profile">
          <img src={character.img} />
          <h3>{character.portrayed}</h3>
        </div>

        <div className="details">
          <h1 className="characterName">{character.name}</h1>
          <h3>Birth Date : {character.birthday}</h3>
          <h3>Occupation(s) : {character.occupation.join(', ')}</h3>
          <h3>
            Death Count : <span className="deathCount">{deathCount}</span>{' '}
          </h3>
          {quote ? <p> {`“ ${quote} ”`} </p> : ''}
          {quote ? <button onClick={getOtherQuote}>Get Another Quote</button> : ''}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
