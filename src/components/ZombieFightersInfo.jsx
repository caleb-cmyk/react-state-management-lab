const ZombieFighters = ({ zombieFighter }) => {
  return (
    <>
      <p>
        <img src={zombieFighter.img} />
      </p>
      <h2>{zombieFighter.name}</h2>
      <p>Price: {zombieFighter.price}</p>
      <p>Strength: {zombieFighter.strength}</p>
      <p>Agility: {zombieFighter.agility}</p>
      <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
    </>
  );
};

export default ZombieFighters;
