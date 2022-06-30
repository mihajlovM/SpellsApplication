import { setToFavorites, deleteFromFavorites } from "../../utils/storage";
import "../../App.css";

import Card from "../Card/Card";

const SpellsDetails = ({ spell }) => {
  return (
    <div>
      <h1>Spells</h1>
      <Card
        key={spell?.index}
        name={spell?.name}
        description={spell?.desc[0]}
        castingTime={spell?.casting_time}
        range={spell?.range}
        components={spell?.components}
        duration={spell?.duration}
      ></Card>
      <button onClick={() => setToFavorites(spell.index)}>
        save to favorite
      </button>

      <button onClick={() => deleteFromFavorites(spell.index)}>
        DELETE FROM FAVORITES
      </button>
    </div>
  );
};
export default SpellsDetails;
