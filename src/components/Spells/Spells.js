import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from 'react-bootstrap'
import TaskAxios from "../../apis/TaskAxios"
import { useNavigate } from "react-router-dom";


function Spells(props) {
  const [spells, setSpells] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    if(spells !== []){
      TaskAxios.
      get("/spells").
      then((response) => {
        setSpells(response.data.results)
      });
    } 
  });
 
  function renderSpells() {
    return spells.map((spells, index) => {
        return (
           <tr key={spells.index}>
              <td>{spells.index}</td>
              <td>{spells.name}</td>
              <td>{spells.url}</td>
              <td><Button variant="warning" onClick={() => this.goToDetails(spells.index)}>details</Button></td>
           </tr>
        )
     })
}


 function goToDetails(index) {
  navigate('/spells/'+ index); 
}


if (spells !== []){
  return (
    <div>
      <h1>Spells</h1>

      <Table style={{marginTop:5}}>
        <thead>
          <tr>
            <th>index</th>
            <th>name</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
           {renderSpells()}
          </tbody> 
      </Table>
    </div>

  )
}
} 
export default Spells;