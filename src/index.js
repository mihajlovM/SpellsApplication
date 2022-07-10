import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import "./index.css";

import Card from "./components/Card/Card";
import SpellsContainer from "../src/components/Spells/SpellsConainter";
import {SpellsDetailsContainer} from "./components/SpellsDetails/SpellsDetailsContainer";
import SavedSpellsContainer from "./components/SavedSpells/SavedSpellsContainer";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <nav className="navigation">
            <Link to={`/`}>Homepage</Link>
            <Link to={`/saved-spells`}>Saved Spells</Link>
          </nav>
          <Routes>
            <Route path="/" element={<SpellsContainer />} />
            <Route path="/spells/:index" element={<SpellsDetailsContainer />} />
            <Route path="/saved-spells" element={<SavedSpellsContainer />} />
            <Route path="/card/" element={<Card />} />
          </Routes>
        </Router>
      </>
    );
  }
}

//ReactDOM.render(<App />, document.querySelector("#root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
