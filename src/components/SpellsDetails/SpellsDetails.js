import React, { useEffect, useState} from "react";
import TaskAxios from "../../apis/TaskAxios"
import { useParams } from 'react-router-dom';
 


function SpellsDetails() {
  const [spells, setSpells] = useState([]);
 
    const {index} = useParams();
 
  useEffect(() => {
      TaskAxios.get("/spells/" + index).then((response) => {
        setSpells(response.data.results)
        console.log(response);
       });
  }, [index]); //samo jednom ako je [], vise puta moramo proslediti argumente [spells]

    return (
        <div>
            <h1>Spells</h1>
        </div>
    );

}
export default SpellsDetails;