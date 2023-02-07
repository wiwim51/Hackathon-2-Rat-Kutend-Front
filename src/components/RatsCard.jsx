import { useState, useEffect } from "react";

const RatsCard = ({ rat, setCart }) => {
  const [panierButtonAdd, setPanierButtonAdd] = useState(true);
  const addOnCart = (e) => {
    setCart((prevState) => [...prevState, rat]);
    setPanierButtonAdd(false);
  };

  return (
    <div className="ratsCard-container">
      <div className="ratsCard-body">
        <div className="rats-front">
          <img className="rats-img" src={rat.image} alt={rat.name} />
          <h3 className="ratsCard-name">{rat.name}</h3>
          <h5 className="ratsCard-prix">{rat.prix} écus d'or</h5>
        </div>
        <div className="ratsCard-back">
          <div className="ratsCard-texte">
            <p className="ratsCard-desc">{rat.description}</p>
            <div className="ratsCard-cara">
              <p>Vitesse : {rat.vitesseTexte}</p>
              <p>Contagion : {rat.contagionTexte}</p>
              <p>Menace : {rat.menaceTexte}</p>
            </div>
            {panierButtonAdd ? (
              <button className="add-button" onClick={(e) => addOnCart(e)}>
                Add
              </button>
            ) : (
              <button className="added-button">Added</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatsCard;
