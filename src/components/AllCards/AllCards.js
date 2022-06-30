import "./Card.css";

const AllCards = ({
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

export default AllCards;
