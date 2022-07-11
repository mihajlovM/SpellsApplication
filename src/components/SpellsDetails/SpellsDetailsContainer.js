import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpellsDetails from "./SpellsDetails";
import axios from "axios";
import { BASE_URL } from "../../url/baseUrl";

export function SpellsDetailsContainer() {
  const [spell, setSpell] = useState(null);

  const { index } = useParams();
   
  useEffect(() => {
    if (!spell && index)
       axios.get(`${BASE_URL}/spells/` + index).then((response) => {
        setSpell(response.data);
      });
  }, [spell, index]);

  return <SpellsDetails spell={spell} />;
}
