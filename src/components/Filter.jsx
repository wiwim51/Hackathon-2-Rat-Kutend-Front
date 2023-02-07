
const Filter = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setResult(
      props.rats.filter(
        (rat) =>
          (rat.vitesse === parseInt(props.vitesseValue) ||
            0 === parseInt(props.vitesseValue)) &&
          (rat.menace === parseInt(props.menaceValue) ||
            0 === parseInt(props.menaceValue)) &&
          (rat.contagion === parseInt(props.contagionValue) ||
            0 === parseInt(props.contagionValue)) 
      )
    );
  };
    return (
      <div className="filter-container">
      <form className="form" onSubmit={handleSubmit}>

      <label for ="vitesse" className="label-text">Vitesse</label>
        <select
        className="dropdown"
          name="vitesse"
          onChange={(e) => props.setVitesseValue(e.target.value)}
        >
          <option value="0">---</option>
          {props.vitesseTexte[0]
            ? props.vitesseTexte.map((text, i) => (
                <option  value={i + 1} key={i} >
                  {text.vitesseTexte}
                </option>
              ))
            : null}
        </select>
        <label  for ="menace" className="label-text">Menace</label>
        <select className="dropdown" name="menace" onChange={(e) => props.setMenaceValue(e.target.value)}>
          <option value="0">---</option>
          {props.menaceTexte[0]
            ? props.menaceTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.menaceTexte}
                </option>
              ))
            : null}
        </select>
        <label  for ="contagion" className="label-text">Contagion</label>
        <select
        className="dropdown"
          name="contagion"
          onChange={(e) => props.setContagionValue(e.target.value)}
        >
          <option value="0">---</option>
          {props.contagionTexte[0]
            ? props.contagionTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.contagionTexte}
                </option>
              ))
            : null}
        </select>
        <button className="filter-button">Rechercher</button>
      </form>
  
      
          </div>
        
    )
}
export default Filter
