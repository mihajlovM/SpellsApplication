import { useEffect, useState } from "react";
import Spells from "../Spells/Spells";
import taskAxios from "../../apis/taskAxios";

function SpellsContainer() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    taskAxios.get("/spells").then((response) => {
      setSpells(response.data.results);
    });
  }, []);

  return <Spells spells={spells} />;
}
export default SpellsContainer;
