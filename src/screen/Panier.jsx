import PanierSelection from "../components/PanierSelection";
import TotalSelection from "../components/TotalSelection";
import Header2 from "../components/Header2";
import Map from "../components/Map";
import { useState, useEffect } from "react";

const Panier = () => {
  const [panierStorage, setPanierStorage] = useState([]);
  const [panierTotal, setPanierTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartRat"));

    if (items) {
      setPanierStorage(items);
    }
  }, []);

  useEffect(() => {
    setPanierTotal(panierStorage.map((e) => e.prix).reduce((a, b) => a + b, 0));
  }, [panierStorage]);

  return (
    <div className="globalpanier">
      <Header2 />
      {/* <div className="gradient"></div> */}
      <div className="selection">
        <PanierSelection panier={panierStorage} setPanier={setPanierStorage} />
        <TotalSelection total={panierTotal} />
      </div>
    </div>
  );
};

export default Panier;
