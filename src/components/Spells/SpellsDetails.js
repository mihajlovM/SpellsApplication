import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from 'react-bootstrap'
import TaskAxios from "../../apis/TaskAxios"
import { useNavigate } from "react-router-dom";


function SpellsDetails(props) {
  const [spells, setSpells] = useState([]);
 
 
  useEffect(() => {
    if(spells !== []){
      TaskAxios.
      get("/spells/"+ this.props.index).
      then((response) => {
        setSpells(response.data.results)
      });
    } 
  });



if (spells !== []){
    return (
        <div>
            <h1>Edit movie</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={this.state.movieName} onChange={(e) => this.onNameChange(e)}/><br/>
            </form>
        </div>
    );
}
}
 
export default SpellsDetails;