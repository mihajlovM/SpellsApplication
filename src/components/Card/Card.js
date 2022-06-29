const Card = ({ name, index, isSaved, children }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{index}</p>
      {/* <button onClick={onToggle}>{isSaved ? "✔" : "×"}</button> */}
      {children}
      {/* Children as prop pattern */}
    </div>
  );
};

export default Card;

{
  /* <Card />

<Card>
  <button>Hanlder</button>
</Card> */
}
