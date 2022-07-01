import { useEffect, useState } from "react";
import taskAxios from "../../apis/taskAxios";
import { useParams } from "react-router-dom";
import SpellsDetails from "./SpellsDetails";

function SpellsDetailsContainer(props) {
  const [spell, setSpell] = useState(null);

  const { index } = useParams();
  console.log(index);

  useEffect(() => {
    if (!spell && index)
      taskAxios.get("/spells/" + index).then((response) => {
        setSpell(response.data);
        console.log(response.data);
      });
  }, [spell, index]);

  return <SpellsDetails spell={spell} />;
}
export default SpellsDetailsContainer;
