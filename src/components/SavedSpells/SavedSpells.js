import Card from "../Card/Card";
import "../../App.css";

const SavedSpells = ({ spells }) => {
  if (spells && spells.length === 0) {
    return <p> loading</p>;
  }
  return (
    <div>
      <h1>favorites</h1>

      <div className="card-list-wrapper">
        {spells.map((spell) => (
          <Card
            key={spell.index}
            name={spell.name}
            description={spell.desc[0]}
            castingTime={spell.casting_time}
            range={spell.range}
            components={spell.components}
            duration={spell.duration}
          />
        ))}
      </div>
    </div>
  );
};
export default SavedSpells;
