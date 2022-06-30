import logo from "./logo.svg";
import "./App.css";

/**
 * TODO @markom
 * - Remove unused imports
 * - Use english for variables/functions/classNames
 * - Remove non-assignment related content
 * - Each utility should have a comment explaining its purpose (like getFromFavorites)
 * - Do not use var, use const instead
 * - Axios service should be lowercased
 * - Remove AllCards since it is not used
 * - Remove comments
 * - Every page should follow the same structure (e.g. loading state)
 * - Improve styles on Spells page (e.g. create a dedicated card component)
 * - Spell detail should have a button that toggles the spell to be a favourite
 * - Saved Spells should have a comment that explains why Promise.all was used (and why you think it is a hack)
 * - Improve Card styles (look for inspiration online)
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
