import { Link } from "react-router-dom";
import { useState } from "react";
import ModalPaiement from "./ModalPaiement";
import bourseOr from "../assets/images/bourseOr.png";

const TotalSelection = ({ total }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="totalpanier-container">
        <div className="panier-description">
          <h2 className="title-totalpanier">TOTAL</h2>

          <h4 className="totalpanier">DE VOTRE COMMANDE </h4>
          <h4 className="totalpanier ecus">
            {total} écus d'or{" "}
            <img className="bourse" src={bourseOr} alt="bourse d'or"></img>
          </h4>
        </div>
        <div className="btn-totalcontainer">
          <button
            className="btn-totalpanier"
            href="#"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            {" "}
            VALIDER MA COMMANDE{" "}
          </button>
          <Link to="/catalogue">
            <button className="btn-cancelpanier">CONTINUER MES ACHATS</button>
          </Link>
        </div>
      </div>

      {openModal && <ModalPaiement closeModal={setOpenModal} />}
    </>
  );
};

export default TotalSelection;
