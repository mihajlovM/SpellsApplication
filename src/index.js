import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Link, HashRouter as Router, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"
import './index.css';

import Spells from './components/Spells/Spells';
import SpellsDetails from './components/Spells/SpellsDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar expand bg="dark" variant="dark">
            
          </Navbar>
          <Container >
            <Routes>
              <Route path="/" element={<Spells/>} />
              <Route path="/spells/:index" element={<SpellsDetails/>} />
            </Routes>
          </Container>
        </Router>
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.querySelector("#root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
