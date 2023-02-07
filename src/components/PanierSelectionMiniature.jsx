import bourseOr from "../assets/images/bourseOr.png";

const PanierSelectionMiniature = ({ rat, panier, setPanier, key }) => {
  const deleteOnCart = (i) => {
    const panierTemp = [...panier];
    panierTemp.splice(i, 1);
    setPanier(panierTemp);
    localStorage.setItem("cartRat", JSON.stringify(panierTemp));
  };
  return (
    <li className="selectionMiniature">
      <div className="text">
        <img className="imgrat" src={rat.image} alt={rat.name} />
        <h3>{rat.name}</h3>
        <h4>
          {rat.prix}
          <br />
          écus d'or
        </h4>
        <img className="bourse" src={bourseOr} alt="bourse d'or"></img>
      </div>
      <button onClick={() => deleteOnCart(key)}>Supprimer</button>
    </li>
  );
};

export default PanierSelectionMiniature;
