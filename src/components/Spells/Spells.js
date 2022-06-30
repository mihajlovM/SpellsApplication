import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../App.css";

const Spells = ({ spells }) => {
  if (spells && spells.length === 0) {
    return <p> loading</p>;
  }

  return (
    <div>
      <h1>Spells</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/saved-spells`}>favourites</Link>
          </li>
        </ul>
      </nav>
      <div className="card-list-wrapper">
        {spells.map((spell) => (
          <article className="card-wapper">
            <Button>
              <Link to={`/spells/${spell.index}`}> {spell.name}</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Spells;
