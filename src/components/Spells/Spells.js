import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../App.css";

const Spells = ({ spells }) => {
  ///mora da se deklarise pre nego sto se pozove(arrow funkc)

  if (spells && spells.length === 0) {
    return <p> loading</p>;
  }
  console.log(spells);
  return (
    <div>
      <h1>Spells</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/saved-spells`}>favourites</Link>
          </li>
        </ul>
      </nav>
      <div className="card-list-wrapper">
        {spells.map((spell) => (
          <article className="card-wapper">
            <Button>
              <Link to={`/spells/${spell.index}`}> {spell.name}</Link>
            </Button>
          </article>
        ))}
      </div>
      {/* <Card name="Name" index="1" isSaved={getFromFavorites().includes(item.index)}> */}
      {/* <Table style={{ marginTop: 5 }}>
        <thead>
          <tr>
            <th>index</th>
            <th>name</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {spells.map((item) => (
            <tr key={item.index}>
              <td>
                {item.index}{" "}
                {getFromFavorites().includes(item.index) ? "yes" : "no"}
              </td>
              <td>{item.name}</td>
              <td>{item.url}</td>
              <td>
                <Link to={`/spells/${item.index}`}> details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
};

export default Spells;
