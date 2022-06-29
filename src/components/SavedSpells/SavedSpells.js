import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { getFromFavorites, setToFavorites } from "../../utils/storage";
import TaskAxios from "../../apis/TaskAxios";

const SavedSpells = ({ spells }) => {
  return (
    <div>
      <h1>favorites</h1>

      <Table style={{ marginTop: 5 }}>
        <thead>
          <tr>
            <th> {spells.index}</th>
          </tr>
        </thead>
        <tbody>
          {spells.map((spell) => (
            <p key={spell.name}>{spell.name}</p>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default SavedSpells;
