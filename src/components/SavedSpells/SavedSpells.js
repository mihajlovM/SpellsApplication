import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { getFromFavorites, setToFavorites } from "../../utils/storage";
import TaskAxios from "../../apis/TaskAxios";

const SavedSpells = ({ spells }) => {
  // const [fav, setFav] = useState([]);

  // useEffect(() => {
  //   const savedSpells = JSON.parse(localStorage.getItem("fav"));

  //   let niz = [];
  //   savedSpells.forEach((element) => {
  //     console.log(element);
  //     const promise1 = TaskAxios.get("/spells/" + element);
  //     niz.push(promise1);
  //   });

  //   //nije pouzdan endpoint i zato je koriscen promis.all (paralelizacija requestova)
  //   Promise.all(niz).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div>
      <h1>favorites</h1>

      <Table style={{ marginTop: 5 }}>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>{getFromFavorites()}</tbody>
      </Table>
    </div>
  );
};
export default SavedSpells;
