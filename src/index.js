import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "./index.css";

import SavedSpells from "./components/SavedSpells/SavedSpells.js";
import SpellsContainer from "../src/components/Spells/SpellsConainter";
import SpellsDetailsContainer from "./components/SpellsDetails/SpellsDetailsContainer";
import SavedSpellsContainer from "./components/SavedSpells/SavedSpellsContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar expand bg="dark" variant="dark"></Navbar>
          <Container>
            <Routes>
              <Route path="/" element={<SpellsContainer />} />
              <Route
                path="/spells/:index"
                element={<SpellsDetailsContainer />}
              />
              <Route
                path="/saved-spells/:index"
                element={<SavedSpellsContainer />}
              />
            </Routes>
          </Container>
        </Router>
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.querySelector("#root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
