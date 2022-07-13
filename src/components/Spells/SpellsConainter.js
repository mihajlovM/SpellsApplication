import { useEffect, useState } from "react";
import Spells from "../Spells/Spells";
import { BASE_URL } from "../../url/baseUrl";
import axios from "axios";
import { fetchSpells } from "./SpellsAxios";
function SpellsContainer() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetchSpells().then((response) => {
      setSpells(response.data.results);
    });
  }, []);

  return <Spells spells={spells} />;
}
export default SpellsContainer;
