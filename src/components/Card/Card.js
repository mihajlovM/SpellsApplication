import "./Card.css";

const Card = ({
  headeAction,
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
    <article className="card">
      <header className="card-header">
        <h3 className="card-title">{name}</h3>
        {headeAction}
      </header>
      <main>
        <ul className="spell-details-list">
          <li className="spell-details-list-item">
            <h4 className="spell-details-list-item-title">Casting Time</h4>
            <span>{castingTime}</span>
          </li>
          <li className="spell-details-list-item">
            <h4 className="spell-details-list-item-title">Range</h4>
            <span>{range}</span>
          </li>
          <li className="spell-details-list-item">
            <h4 className="spell-details-list-item-title">Components</h4>
            <span>{components}</span>
          </li>
          <li className="spell-details-list-item">
            <h4 className="spell-details-list-item-title">Duration</h4>
            <span>{duration}</span>
          </li>
        </ul>
        <p className="spell-description">{description}</p>
      </main>
      <footer>{children}</footer>
    </article>
  );
};

export default Card;
