import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap'

function SavedSpells() {

   const [fav, setFav] = useState([]);
  const {index} = useParams();

 console.log(index);

  //save into favorites
  useEffect(() => {
const fav = getFromFavorites();

    

    // let a = fav.pop()

    // if(a !== index)
    // {
    //   fav.push(a);
    //   fav.push(index)
    // } 
    // else{
    //   fav.push(a);
    // }

    fav.push(index)
  
    console.log(fav)
    localStorage.setItem('fav', JSON.stringify(fav));
}, [index]);
 


  function getFromFavorites() {

    let fav;
    if(localStorage.getItem('fav') ===null ) {
        fav = [];
    }else{
        fav=JSON.parse(localStorage.getItem('fav'))
    }
    return fav;
  }

  
    return (
      <div>
        <h1>favorites</h1>
  
        <Table style={{marginTop:5}}>
          <thead>
            <tr>
              <th>index</th>
            </tr>
          </thead>
          <tbody>
             {getFromFavorites()}
            </tbody> 
        </Table>
      </div>
  
    )
  
 
} export default SavedSpells;