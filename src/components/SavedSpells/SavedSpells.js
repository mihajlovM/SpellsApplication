import Card from "../Card/Card";
import "../../App.css";
import "./SavedSpells.css";
import { Link } from "react-router-dom";

const SavedSpells = ({ spells }) => {
  if (!spells) {
    return <p>Loading...</p>;
  }

  if (spells && spells.length === 0) {
    return <p>No saved spells</p>;
  }

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <h1>Saved Spells</h1>
      </header>
      <main className="page-content">
        <div className="card-list-wrapper">
          {spells.map((spell) => (
            <Link to={`/spells/${spell.index}`} className="link">
              <Card
                key={spell.index}
                name={spell.name}
                description={spell.desc[0]}
                castingTime={spell.casting_time}
                range={spell.range}
                components={spell.components}
                duration={spell.duration}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};
export default SavedSpells;
