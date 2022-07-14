import { useEffect, useState } from "react";

import SavedSpells from "./SavedSpells";
import { fetchSpells } from "./SavedSpellsAxios";

function SavedSpellsContainer() {
  const [spells, setSpells] = useState(null);

  useEffect(() => {
    fetchSpells().then((response) => {
      const mapSpells = (spellPayload) => spellPayload.data;

      setSpells(response.map(mapSpells));
      console.log(response)
    });
  }, []);

  return <SavedSpells spells={spells} />;
}
export default SavedSpellsContainer;
