import { useEffect, useState } from "react";

import SavedSpells from "./SavedSpells";
import { getFromFavorites } from "../../utils/storage";
import taskAxios from "../../apis/taskAxios";

function SavedSpellsContainer() {
  const [spells, setSpells] = useState(null);

  useEffect(() => {
    const savedSpells = getFromFavorites();

    console.log("======================");
    console.log(savedSpells);
    console.log("======================");

    const arr = [];
    savedSpells.forEach((element) => {
      arr.push(taskAxios.get(`/spells/${element}`));
    });

    /**
     * Not a reliable endpoint and therefore Promise.all was used parallelization of requests.
     * To explain why the endpoint with multiple query params was not used ↑ was a workaround
     */
    Promise.all(arr).then((response) => {
      const mapSpells = (spellPayload) => spellPayload.data;
      setSpells(response.map(mapSpells));
    });
  }, []);

  return <SavedSpells spells={spells} />;
}
export default SavedSpellsContainer;
