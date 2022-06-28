import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TaskAxios from "../../apis/TaskAxios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Spells(props) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    //pretter podesiti
    TaskAxios.get("/spells").then((response) => {
      setSpells(response.data.results);
    });
  }, []);

  function renderSpells() {
    // document.getElementById("myBtn").addEventListener("click", myFunction);

    function myFunction(index) {
      let fav = getFromFavorites();
      console.log(index);
      fav.push(index);
      localStorage.setItem("fav", JSON.stringify(fav));
    }

    function getFromFavorites() {
      let fav;
      if (localStorage.getItem("fav") === null) {
        fav = [];
      } else {
        fav = JSON.parse(localStorage.getItem("fav"));
      }
      return fav;
    }
    return spells.map((spells, index) => {
      return (
        <tr key={spells.index}>
          <td>{spells.index}</td>
          <td>{spells.name}</td>
          <td>{spells.url}</td>
          <td>
            {/* <Button variant="warning" onClick={() => goToDetails(spells.index)}>
                  details
                  </Button> */}
            <Link to={`spells/${spells.index}`}> details</Link>
          </td>
          <td>
            <Link to={`spells/saved/${spells.index}`}> favourites</Link>
          </td>
          <td>
            <button onClick={() => myFunction(spells.index)}>Try it</button>
          </td>
        </tr>
      );
    });
  }

  if (spells !== []) {
    return (
      <div>
        <h1>Spells</h1>

        <Table style={{ marginTop: 5 }}>
          <thead>
            <tr>
              <th>index</th>
              <th>name</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>{renderSpells()}</tbody>
        </Table>
      </div>
    );
  }
}
export default Spells;
