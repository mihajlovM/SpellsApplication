import React, { useEffect, useState } from "react";
import TaskAxios from "../../apis/TaskAxios";
import { useParams } from "react-router-dom";
import { getFromFavorites, setToFavorites } from "../../utils/storage";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const SpellsDetails = ({ spell }) => {
  return (
    <div>
      <h1>Spells</h1>
      <button onClick={() => setToFavorites(spell.index)}>
        save to favorite
      </button>
    </div>
  );
};
export default SpellsDetails;
