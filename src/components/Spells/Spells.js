import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TaskAxios from "../../apis/TaskAxios";
import { Link } from "react-router-dom";

function Spells(props) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    //pretter podesiti
    TaskAxios.get("/spells").then((response) => {
      setSpells(response.data.results);
    });
  }, []);

  function renderSpells() {
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
