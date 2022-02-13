import React from "react";

import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Breaking Bad 🧪👨‍🔬</h1>
      <Link to="/characters"> go to characters</Link>
    </div>
  );
};

export default Home;
