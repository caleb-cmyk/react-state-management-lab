const ZombieFighter = ( {zombieFighter} ) => {
  return (
    <>
      <div>
        <img src={zombieFighter.img}></img>
      </div>
      <h2>{zombieFighter.name}</h2>
      <div>Price: {zombieFighter.price}</div>
      <div>Strength: {zombieFighter.strength}</div>
      <div>Agility: {zombieFighter.agility}</div>
    </>
  );
};

export default ZombieFighter;
