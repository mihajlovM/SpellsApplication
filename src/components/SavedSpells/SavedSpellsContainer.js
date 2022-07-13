import { useEffect, useState } from "react";
import { BASE_URL } from "../../url/baseUrl";
import axios from "axios";

import SavedSpells from "./SavedSpells";
import { getFromFavorites } from "../../utils/storage";

function SavedSpellsContainer() {
  const [spells, setSpells] = useState(null);

  useEffect(() => {
    const savedSpells = getFromFavorites("fav");

    const arr = [];
    savedSpells.forEach((element) => {
      arr.push(axios.get(`${BASE_URL}/spells/${element}`));
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