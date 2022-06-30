// attack_type: "ranged"
// casting_time: "1 action"
// classes: [{…}]
// components: (3) ['V', 'S', 'M']
// concentration: false
// damage: {damage_type: {…}, damage_at_slot_level: {…}}
// desc: ['A shimmering green arrow streaks toward a target w…damage and no damage at the end of its next turn.']
// duration: "Instantaneous"
// higher_level: ['When you cast this spell using a spell slot of 3rd…) increases by 1d4 for each slot level above 2nd.']
// index: "acid-arrow"
// level: 2
// material: "Powdered rhubarb leaf and an adder's stomach."
// name: "Acid Arrow"
// range: "90 feet"
// ritual: false
// school: {index: 'evocation', name: 'Evocation', url: '/api/magic-schools/evocation'}
// subclasses: (2) [{…}, {…}]
// url: "/api/spells/acid-arrow"
// _id: "62b248818b12b6a08c9fa605"

// import { Card } from "../Card/Card";
import Card from "../Card/Card";
import "../../App.css";

const SavedSpells = ({ spells }) => {
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
