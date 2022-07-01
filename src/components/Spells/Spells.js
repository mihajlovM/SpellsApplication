import { Link } from "react-router-dom";
import "../../App.css";

const Spells = ({ spells }) => {
  if (spells && spells.length === 0) {
    return <p> loading</p>;
  }

  return (
    <div>
      <ul>
        {spells.map((spell) => (
          <li key={spell.index}>
            <Link to={`/spells/${spell.index}`}> {spell.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Spells;
