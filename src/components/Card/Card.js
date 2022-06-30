import Logo from "../../images/image1.png";
import { Box } from "theme-ui";
import "./Card.css";

const Card = ({
  index,
  isSaved,
  name,
  children,
  description,
  castingTime,
  range,
  components,
  duration,
}) => {
  return (
    <article className="card-wrapper">
      <header>
        <h3>{name}</h3>
      </header>
      <main>
        <ul>
          <li>
            <h4>Casting Time</h4>
            <span>{castingTime}</span>
          </li>
          <li>
            <h4>Range</h4>
            <span>{range}</span>
          </li>
          <li>
            <h4>Components</h4>
            <span>{components}</span>
          </li>
          <li>
            <h4>Duration</h4>
            <span>{duration}</span>
          </li>
        </ul>
        <p>{description}</p>
      </main>
      <footer>{children}</footer>

      {/* <p>{index}</p> */}

      {/* <Box>
        {" "}
        <div>
          <img className="photo" src={Logo} alt="aa" />
        </div>
        <p>description....</p>
      </Box> */}

      {/* <button onClick={onToggle}>{isSaved ? "✔" : "×"}</button> */}
    </article>
  );
};

export default Card;
