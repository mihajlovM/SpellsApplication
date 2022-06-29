import { useEffect, useState } from "react";
import Spells from "../Spells/Spells";
import TaskAxios from "../../apis/TaskAxios";
import SavedSpells from "./SavedSpells";

function SavedSpellsContainer(props) {
  const [fav, setFav] = useState([]);
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const savedSpells = JSON.parse(localStorage.getItem("fav"));

    let niz = [];
    savedSpells.forEach((element) => {
      // console.log(element);
      const promise1 = TaskAxios.get("/spells/" + element);
      niz.push(promise1);
    });

    //nije pouzdan endpoint i zato je koriscen promis.all (paralelizacija requestova)
    Promise.all(niz).then((response) => {
      //setSpells(response.data);
      console.log(response.data);
    });
  }, []);

  return <SavedSpells spells={spells} />;
}
export default SavedSpellsContainer;
