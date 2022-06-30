import React, { useEffect, useState } from "react";
import TaskAxios from "../../apis/TaskAxios";
import { useParams } from "react-router-dom";
import {
  getFromFavorites,
  setToFavorites,
  deleteFromFavorites,
} from "../../utils/storage";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import "../../App.css";

const SpellsDetails = ({ spell }) => {
  return (
    <div>
      <h1>Spells</h1>
      <button onClick={() => setToFavorites(spell.index)}>
        save to favorite
      </button>

      <button onClick={() => deleteFromFavorites(spell.index)}>
        DELETE FROM FAVORITES
      </button>
    </div>
  );
};
export default SpellsDetails;

// <Card
//   key={spell.index}
//   name={spell.name}
//   description={spell.desc[0]}
//   castingTime={spell.casting_time}
//   range={spell.range}
//   components={spell.components}
//   duration={spell.duration}
// >
//   <button onClick={() => setToFavorites(spell.index)}>save to favorite</button>

//   <button onClick={() => deleteFromFavorites(spell.index)}>
//     DELETE FROM FAVORITES
//   </button>
// </Card>;
