import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import Home from "./components/Home";
import "./styles/app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default App;
