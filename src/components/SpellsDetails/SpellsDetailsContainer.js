import { useEffect, useState } from "react";
import TaskAxios from "../../apis/TaskAxios";
import { useParams } from "react-router-dom";
import SpellsDetails from "./SpellsDetails";
import Spells from "../Spells/Spells";

function SpellsDetailsContainer(props) {
  const [spell, setSpell] = useState(null);

  const { index } = useParams();
  console.log(index);

  useEffect(() => {
    if (!spell && index) {
      TaskAxios.get("/spells/" + index).then((response) => {
        setSpell(response.data);
        console.log(response.data);
      });
    }
  }, [spell, index]);
  //samo jednom ako je [], vise puta moramo proslediti argumente [spells]
  return <SpellsDetails spell={spell} />;
}
export default SpellsDetailsContainer;
