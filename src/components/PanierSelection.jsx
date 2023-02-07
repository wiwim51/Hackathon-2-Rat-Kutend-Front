import PanierSelectionMiniature from "../components/PanierSelectionMiniature";
const PanierSelection = ({ panier, setPanier }) => {
  return (
    <ul className="blockSelection">
      {panier.map((rat, i) => (
        <PanierSelectionMiniature
          key={i}
          rat={rat}
          panier={panier}
          setPanier={setPanier}
        />
      ))}
    </ul>
  );
};

export default PanierSelection;
