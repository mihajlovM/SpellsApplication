import { useEffect, useState } from "react";
import Spells from "../Spells/Spells";
import TaskAxios from "../../apis/TaskAxios";

function SpellsContainer(props) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    TaskAxios.get("/spells").then((response) => {
      setSpells(response.data.results);
    });
  }, []);

  return <Spells spells={spells} />;
}
export default SpellsContainer;
