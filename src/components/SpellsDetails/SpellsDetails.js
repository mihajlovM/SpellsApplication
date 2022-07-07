import { Link } from "react-router-dom";
import {
  setToFavorites,
  deleteFromFavorites,
  getFromFavorites,
} from "../../utils/storage";
import "../../App.css";
import "./SpellsDetails.css";
import Card from "../Card/Card";
import { Switch } from "theme-ui";
import { useState, useEffect } from "react";

const SpellsDetails = ({ spell }) => {
  const [isSaved, setIsSaved] = useState(null);

  useEffect(() => {
    setIsSaved(getFromFavorites("fav").includes(spell?.index));
  }, [spell, setIsSaved]);

  const handleFavorites = () => {
    if (isSaved) {
      deleteFromFavorites(spell.index, "fav");
      setIsSaved(false);
    } else {
      setToFavorites(spell.index, "fav");
      setIsSaved(true);
    }
  };

  if (!spell) {
    return <p> loading</p>;
  }

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <h1>Spell Detail</h1>
      </header>
      <main className="page-content">
        <Card
          headeAction={
            <button onClick={handleFavorites}>
              {isSaved ? "Saved" : "Save"}
            </button>
          }
          key={spell?.index}
          name={spell?.name}
          description={spell?.desc[0]}
          castingTime={spell?.casting_time}
          range={spell?.range}
          components={spell?.components}
          duration={spell?.duration}
        ></Card>
      </main>
    </div>
  );
};
export default SpellsDetails;
