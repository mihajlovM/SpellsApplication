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
