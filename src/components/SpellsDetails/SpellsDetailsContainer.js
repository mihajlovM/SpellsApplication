import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpellsDetails from "./SpellsDetails";

import { fetchSpells } from "./SpellsAxiosDetails";

export function SpellsDetailsContainer() {
  const [spell, setSpell] = useState(null);

  const { index } = useParams();

  useEffect(() => {
    if (!spell && index)
      fetchSpells(index).then((response) => {
        setSpell(response.data);
      });
  }, [spell, index]);

  return <SpellsDetails spell={spell} />;
}
