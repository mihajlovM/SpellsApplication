import { useEffect, useState } from "react";
import TaskAxios from "../../apis/TaskAxios";
import SavedSpells from "./SavedSpells";
import { getFromFavorites } from "../../utils/storage";

function SavedSpellsContainer() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const savedSpells = getFromFavorites();

    const arr = [];
    savedSpells.forEach((element) => {
      const promise1 = TaskAxios.get("/spells/" + element);
      arr.push(promise1);
    });

    //nije pouzdan endpoint i zato je koriscen promis.all (paralelizacija requestova)
    //$
    Promise.all(arr).then((response) => {
      const mapSpells = (spellPayload) => spellPayload.data;
      setSpells(response.map(mapSpells));
    });
  }, []);

  return <SavedSpells spells={spells} />;
}
export default SavedSpellsContainer;
