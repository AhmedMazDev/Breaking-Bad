import axios from "axios";
import React, { useState, useEffect } from "react";
import service from "../config";

const CharacterDetails = ({ character }) => {
  const [deathCount, setDeathCount] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState();

  const name = character.name.replace(" ", "+");

  const fetchDeaths = async () => {
    const res = await service.get(`death-count?name=${name}`);
    setDeathCount(res.data.map((item) => item.deathCount));
  };

  const fetchQuotes = async () => {
    const res = await service.get(`quote?author=${name}`);
    setQuotes(res.data || []);
    setQuote(res.data[0]?.quote ?? "");
  };

  const getOtherQuote = () => {
    console.log(quotes);
    setQuote(quotes[Math.floor(Math.random() * quotes.length)].quote);
  };

  useEffect(() => {
    fetchDeaths();
    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>{character.nickname}</h1>
      <img src={character.img} />
      <h1>{character.name}</h1>
      <h3>{character.birthday}</h3>
      <h3>{character.occupation.join(",")}</h3>
      <h3>Death Count : {deathCount}</h3>
      {quote ? <p> {quote} </p> : ""}
      {quote ? <button onClick={getOtherQuote}>Get Another Quote</button> : ""}
    </div>
  );
};

export default CharacterDetails;
