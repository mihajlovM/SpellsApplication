import { useEffect, useState } from "react";
import taskAxios from "../../apis/taskAxios";
import { useParams } from "react-router-dom";
import SpellsDetails from "./SpellsDetails";

export function SpellsDetailsContainer() {
  const [spell, setSpell] = useState(null);

  const { index } = useParams();
   

  useEffect(() => {
    if (!spell && index)
      taskAxios.get("/spells/" + index).then((response) => {
        setSpell(response.data);
       
      });
  }, [spell, index]);

  return <SpellsDetails spell={spell} />;
}
