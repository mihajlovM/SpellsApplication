import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  HashRouter as Router,
  Routes
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"
import './index.css';
import Home from './components/Home';
import Spells from './components/Spells/Spells';
import DetailsSpells from './components/Spells/DetailsSpells';

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
              <Route path="/spells/:index" element={<DetailsSpells/>} />
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
