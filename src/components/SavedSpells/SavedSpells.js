import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import TaskAxios from "../../apis/TaskAxios";

function SavedSpells() {
  const [fav, setFav] = useState([]);

  //save into favorites

  // useEffect(() => {
  //   const fav = getFromFavorites();

  //   var index1 = fav.indexOf(index);

  //   if (index1 === -1) {
  //     fav.push(index);
  //   }

  //   localStorage.setItem("fav", JSON.stringify(fav));
  // }, [index]);

  useEffect(() => {
    const savedSpells = JSON.parse(localStorage.getItem("fav"));

    let niz = [];
    savedSpells.forEach((element) => {
      console.log(element);
      const promise1 = TaskAxios.get("/spells/" + element);
      niz.push(promise1);
    });

    Promise.all(niz).then((response) => {
      console.log(response);
    });
  }, []);

  function getFromFavorites() {
    let fav;
    if (localStorage.getItem("fav") === null) {
      fav = [];
    } else {
      fav = JSON.parse(localStorage.getItem("fav"));
    }
    return fav;
  }
  return (
    <div>
      <h1>favorites</h1>

      <Table style={{ marginTop: 5 }}>
        <thead>
          <tr>
            <th>index</th>
          </tr>
        </thead>
        <tbody>{getFromFavorites()}</tbody>
      </Table>
    </div>
  );
}
export default SavedSpells;
